const LANGUAGES = [
  { code: 'tr', name: 'Türkçe' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'zh', name: '中文' },
  { code: 'az', name: 'Azərbaycanca' },
  { code: 'ru', name: 'Русский' }
];

const TRANSLATIONS = {
  tr: {
    title: 'AI Araştırma Asistanı',
    description: 'Bir soru sor, yerel motor internette arama yapıp özetlesin. API anahtarı gerekmiyor.',
    label: 'Soru',
    placeholder: 'Buraya sorunuzu yazın...',
    submit: 'Araştır',
    searching: 'Araştırılıyor... Lütfen bekleyin.',
    done: 'Araştırma tamamlandı.',
    error: 'Hata',
    note: 'Not: Bu sistem, yerel fonksiyon içinde DuckDuckGo araması ve kendi özetleme motoru ile çalışır.',
    profile: 'Hesap',
    signup: 'Kayıt Ol',
    login: 'Giriş Yap',
    profileMenu: 'Profil',
    settings: 'Ayarlar',
    help: 'Yardım'
  },
  en: {
    title: 'AI Research Assistant',
    description: 'Ask a question and the local engine searches the web and summarizes it. No API key required.',
    label: 'Question',
    placeholder: 'Write your question here...',
    submit: 'Research',
    searching: 'Searching... Please wait.',
    done: 'Research completed.',
    error: 'Error',
    note: 'Note: This system runs a local DuckDuckGo search and summarization engine.',
    profile: 'Account',
    signup: 'Sign Up',
    login: 'Log In',
    profileMenu: 'Profile',
    settings: 'Settings',
    help: 'Help'
  },
  es: {
    title: 'Asistente de Investigación AI',
    description: 'Haz una pregunta y el motor local buscará en la web y lo resumirá. No se requiere clave API.',
    label: 'Pregunta',
    placeholder: 'Escribe tu pregunta aquí...',
    submit: 'Investigar',
    searching: 'Buscando... Por favor espera.',
    done: 'Investigación completada.',
    error: 'Error',
    note: 'Nota: Este sistema ejecuta una búsqueda DuckDuckGo local y un motor de resumen.',
    profile: 'Cuenta',
    signup: 'Regístrate',
    login: 'Iniciar sesión',
    profileMenu: 'Perfil',
    settings: 'Ajustes',
    help: 'Ayuda'
  },
  de: {
    title: 'KI Forschungsassistent',
    description: 'Stelle eine Frage und die lokale Engine durchsucht das Web und fasst es zusammen. Kein API-Schlüssel erforderlich.',
    label: 'Frage',
    placeholder: 'Schreibe hier deine Frage...',
    submit: 'Suchen',
    searching: 'Suche... Bitte warten.',
    done: 'Recherche abgeschlossen.',
    error: 'Fehler',
    note: 'Hinweis: Dieses System verwendet eine lokale DuckDuckGo-Suche und Zusammenfassungs-Engine.',
    profile: 'Konto',
    signup: 'Registrieren',
    login: 'Anmelden',
    profileMenu: 'Profil',
    settings: 'Einstellungen',
    help: 'Hilfe'
  },
  fr: {
    title: 'Assistant de Recherche IA',
    description: 'Posez une question et le moteur local recherche sur le web et résume. Aucune clé API requise.',
    label: 'Question',
    placeholder: 'Écrivez votre question ici...',
    submit: 'Rechercher',
    searching: 'Recherche... Veuillez patienter.',
    done: 'Recherche terminée.',
    error: 'Erreur',
    note: 'Remarque : Ce système exécute une recherche DuckDuckGo locale et un moteur de résumé.',
    profile: 'Compte',
    signup: 'S’inscrire',
    login: 'Connexion',
    profileMenu: 'Profil',
    settings: 'Paramètres',
    help: 'Aide'
  },
  ja: {
    title: 'AI リサーチアシスタント',
    description: '質問をするとローカルエンジンがウェブを検索し要約します。APIキーは不要です。',
    label: '質問',
    placeholder: 'ここに質問を書いてください...',
    submit: '検索',
    searching: '検索中... お待ちください。',
    done: '検索が完了しました。',
    error: 'エラー',
    note: '注意: このシステムはローカル DuckDuckGo 検索と要約エンジンを実行します。',
    profile: 'アカウント',
    signup: '登録',
    login: 'ログイン',
    profileMenu: 'プロフィール',
    settings: '設定',
    help: 'ヘルプ'
  },
  ko: {
    title: 'AI 리서치 어시스턴트',
    description: '질문을 하면 로컬 엔진이 웹을 검색하고 요약합니다. API 키가 필요 없습니다.',
    label: '질문',
    placeholder: '여기에 질문을 작성하세요...',
    submit: '검색',
    searching: '검색 중... 잠시 기다려주세요.',
    done: '검색이 완료되었습니다.',
    error: '오류',
    note: '참고: 이 시스템은 로컬 DuckDuckGo 검색 및 요약 엔진을 실행합니다.',
    profile: '계정',
    signup: '가입하기',
    login: '로그인',
    profileMenu: '프로필',
    settings: '설정',
    help: '도움말'
  },
  zh: {
    title: 'AI 研究助手',
    description: '提出一个问题，本地引擎会搜索网络并进行摘要。不需要 API 密钥。',
    label: '问题',
    placeholder: '在此输入您的问题...',
    submit: '研究',
    searching: '搜索中... 请稍候。',
    done: '研究完成。',
    error: '错误',
    note: '注意：该系统运行本地 DuckDuckGo 搜索和摘要引擎。',
    profile: '帐户',
    signup: '注册',
    login: '登录',
    profileMenu: '资料',
    settings: '设置',
    help: '帮助'
  },
  az: {
    title: 'AI Tədqiqat Köməkçisi',
    description: 'Sual verin və yerli mühərrik vebi araşdırsın və xülasə etsin. API açarı tələb olunmur.',
    label: 'Sual',
    placeholder: 'Suallarınızı buraya yazın...',
    submit: 'Araşdır',
    searching: 'Axtarılır... Zəhmət olmasa gözləyin.',
    done: 'Araşdırma tamamlandı.',
    error: 'Xəta',
    note: 'Qeyd: Bu sistem yerli DuckDuckGo axtarışı və xülasə mühərrikini işlədir.',
    profile: 'Hesab',
    signup: 'Qeydiyyat',
    login: 'Daxil ol',
    profileMenu: 'Profil',
    settings: 'Ayarlar',
    help: 'Kömək'
  }
};

const languagePicker = document.getElementById('language-picker');
const langButton = document.getElementById('lang-button');
const langMenu = document.getElementById('lang-menu');
const langCurrent = document.getElementById('lang-current');
const profileButton = document.getElementById('profile-button');
const profileMenu = document.getElementById('profile-menu');
const mainTitle = document.getElementById('main-title');
const mainDescription = document.getElementById('main-description');
const questionLabel = document.getElementById('question-label');
const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit-button');
const status = document.getElementById('status');
const responseCard = document.getElementById('response');
const noteText = document.getElementById('note-text');
const signupBtn = document.querySelector('.profile-guest .ghost-btn:first-child');
const loginBtn = document.querySelector('.profile-guest .ghost-btn:last-child');
const profileMenuBtn = document.querySelector('.profile-links button:nth-child(1)');
const settingsBtn = document.querySelector('.profile-links button:nth-child(2)');
const helpBtn = document.querySelector('.profile-links button:nth-child(3)');

const form = document.getElementById('question-form');

let activeLocale = 'tr';
let userLoggedIn = false;

function getUserLocale() {
  const rawLang = navigator.language || navigator.userLanguage || 'en';
  const baseLang = rawLang.toLowerCase().split('-')[0];
  if (TRANSLATIONS[baseLang]) return baseLang;
  if (baseLang === 'tr') return 'tr';
  return 'en';
}

function renderLanguageMenu() {
  langMenu.innerHTML = '';
  LANGUAGES.forEach((lang) => {
    const item = document.createElement('li');
    item.textContent = lang.name;
    item.dataset.code = lang.code;
    item.className = lang.code === activeLocale ? 'active' : '';
    item.addEventListener('click', () => {
      setLocale(lang.code);
      hideMenu(langMenu, langButton);
    });
    langMenu.appendChild(item);
  });
}

function setLocale(code) {
  activeLocale = TRANSLATIONS[code] ? code : 'en';
  const locale = TRANSLATIONS[activeLocale];
  document.documentElement.lang = activeLocale;
  document.title = locale.title;
  mainTitle.textContent = locale.title;
  mainDescription.textContent = locale.description;
  questionLabel.textContent = locale.label;
  questionInput.placeholder = locale.placeholder;
  submitButton.textContent = locale.submit;
  noteText.innerHTML = `<strong>${locale.note.split(':')[0]}:</strong> ${locale.note.split(':')[1].trim()}`;
  profileButton.querySelector('.profile-label').textContent = locale.profile;
  signupBtn.textContent = locale.signup;
  loginBtn.textContent = locale.login;
  profileMenuBtn.textContent = locale.profileMenu;
  settingsBtn.textContent = locale.settings;
  helpBtn.textContent = locale.help;
  langCurrent.textContent = LANGUAGES.find((lang) => lang.code === activeLocale)?.name || 'English';
  renderLanguageMenu();
}

function toggleMenu(menu, button) {
  const isHidden = menu.classList.contains('hidden');
  document.querySelectorAll('.lang-menu, .profile-menu').forEach((other) => {
    other.classList.add('hidden');
  });
  if (isHidden) {
    menu.classList.remove('hidden');
    button.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  }
}

function hideMenu(menu, button) {
  if (!menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
  }
}

langButton.addEventListener('click', () => toggleMenu(langMenu, langButton));
profileButton.addEventListener('click', () => toggleMenu(profileMenu, profileButton));

document.addEventListener('click', (event) => {
  if (!languagePicker.contains(event.target)) {
    hideMenu(langMenu, langButton);
  }
  if (!profileButton.contains(event.target) && !profileMenu.contains(event.target)) {
    hideMenu(profileMenu, profileButton);
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (!question) return;

  status.textContent = TRANSLATIONS[activeLocale].searching;
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
      throw new Error(error.message || TRANSLATIONS[activeLocale].error);
    }

    const data = await res.json();
    responseCard.textContent = data.answer;
    responseCard.classList.remove('hidden');
    status.textContent = TRANSLATIONS[activeLocale].done;
  } catch (error) {
    status.textContent = `${TRANSLATIONS[activeLocale].error}: ${error.message}`;
    responseCard.classList.add('hidden');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const initialLocale = getUserLocale();
  renderLanguageMenu();
  setLocale(initialLocale);
});
