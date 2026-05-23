const form = document.getElementById('question-form');
const questionInput = document.getElementById('question');
const status = document.getElementById('status');
const responseCard = document.getElementById('response');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;

  status.textContent = 'Araştırılıyor... Lütfen bekleyin.';
  responseCard.classList.add('hidden');

  try {
    const res = await fetch('/.netlify/functions/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Sunucu hatası');
    }

    const data = await res.json();
    responseCard.textContent = data.answer;
    responseCard.classList.remove('hidden');
    status.textContent = 'Araştırma tamamlandı.';
  } catch (error) {
    status.textContent = `Hata: ${error.message}`;
    responseCard.classList.add('hidden');
  }
});
