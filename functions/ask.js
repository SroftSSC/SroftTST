const cheerio = require('cheerio');
const { htmlToText } = require('html-to-text');

const STOPWORDS = new Set([
  've', 'ile', 'bir', 'bu', 'o', 'da', 'de', 'mi', 'mi', 'ne', 'ki', 'şu', 'bu', 'artık', 'için',
  'ama', 'veya', 'var', 'yok', 'her', 'tüm', 'bile', 'hem', 'çok', 'az', 'gibi', 'ile', 'daha', 'son',
  'olarak', 'ise', 'sadece', 'mı', 'mu', 'ben', 'sen', 'o', 'biz', 'siz', 'onlar'
]);

const MAX_RESULTS = 8;
const MAX_SOURCES = 4;
const TIMEOUT = 15000;

function normalizeWord(word) {
  return word
    .replace(/[^a-zçğıöşü0-9]/gi, '')
    .toLowerCase();
}

function buildKeywords(question) {
  return question
    .split(/\s+/)
    .map(normalizeWord)
    .filter(Boolean)
    .filter((word) => !STOPWORDS.has(word));
}

function splitSentences(text) {
  return text
    .replace(/\r/g, ' ')
    .replace(/\n+/g, '. ')
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 30);
}

function scoreSentence(sentence, keywordSet) {
  const words = sentence.split(/\s+/).map(normalizeWord).filter(Boolean);
  if (!words.length) return 0;
  let score = 0;
  words.forEach((word) => {
    if (keywordSet.has(word)) score += 2;
  });
  score += Math.min(words.length, 30) * 0.1;
  return score;
}

function summaryFromText(text, keywords, count = 5) {
  const sentences = splitSentences(text);
  const keywordSet = new Set(keywords);
  const scored = sentences.map((sentence) => ({
    sentence,
    score: scoreSentence(sentence, keywordSet)
  }));
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.sentence)
    .join(' ');
}

async function fetchHtml(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function cleanPageText(html) {
  const $ = cheerio.load(html);
  $('script, style, noscript, nav, footer, header, form, iframe, svg').remove();
  const bodyHtml = $('body').html() || html;
  return htmlToText(bodyHtml, {
    wordwrap: false,
    uppercaseHeadings: false,
    selectors: [
      { selector: 'a', options: { ignoreHref: true } }
    ]
  });
}

async function searchDuckDuckGo(question) {
  const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(question)}`;
  const html = await fetchHtml(searchUrl);
  const $ = cheerio.load(html);
  const results = [];
  $('.result').each((index, element) => {
    if (results.length >= MAX_RESULTS) return;
    const title = $(element).find('.result__a').text().trim();
    const url = $(element).find('.result__a').attr('href');
    const snippet = $(element).find('.result__snippet').text().trim();
    if (title && url) {
      results.push({ title, url, snippet });
    }
  });
  return results;
}

async function fetchSourceSummary(source, keywords) {
  try {
    const html = await fetchHtml(source.url);
    const text = cleanPageText(html);
    const summary = summaryFromText(`${source.title}. ${source.snippet}. ${text}`, keywords, 4);
    return { ...source, summary };
  } catch (error) {
    return { ...source, summary: `Kaynak yüklenemedi: ${error.message}` };
  }
}

function buildAnswer(question, sourceSummaries) {
  const cleanQuestion = question.trim();
  const summaryLines = sourceSummaries.map((source, index) => {
    return `Kaynak ${index + 1}: ${source.title}\n${source.url}\nÖzet: ${source.summary}`;
  });

  const answer = [
    `Soru: ${cleanQuestion}`,
    'Aşağıdaki web kaynaklarını tarayıp yerel özet çıkardım:',
    ...summaryLines,
    '\nGenel sonuç:',
    `Bu soruya dair en önemli bilgileri yukarıdaki kaynaklardan seçtim ve ana fikirleri kısaca birleştirdim.`
  ].join('\n\n');

  return answer;
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Yalnızca POST desteklenir.' })
    };
  }

  const body = JSON.parse(event.body || '{}');
  const question = (body.question || '').trim();
  if (!question) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Lütfen bir soru girin.' })
    };
  }

  try {
    const keywords = buildKeywords(question);
    const searchResults = await searchDuckDuckGo(question);
    const sources = searchResults.slice(0, MAX_SOURCES);

    if (!sources.length) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          answer: 'Arama sonuçları bulunamadı. Lütfen farklı bir sorgu deneyin veya internet bağlantınızı kontrol edin.'
        })
      };
    }

    const summaries = [];
    for (const source of sources) {
      const summary = await fetchSourceSummary(source, keywords);
      summaries.push(summary);
    }

    const answer = buildAnswer(question, summaries);
    return {
      statusCode: 200,
      body: JSON.stringify({ answer })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Araştırma motoru hatası: ${error.message}` })
    };
  }
};
