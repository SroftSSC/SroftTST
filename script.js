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
    siteTitle: 'SroftTST - Turkish Software Team',
    title: 'SroftTST AI Merkezi',
    description: 'SroftTST, yapay zekâ destekli yazılım, sohbet ve oyun alanlarını tek ekranda birleştirir.',
    label: 'Soru',
    placeholder: 'Buraya sorunuzu yazın...',
    submit: 'Araştır',
    searching: 'Araştırılıyor... Lütfen bekleyin.',
    done: 'Araştırma tamamlandı.',
    error: 'Hata',
    noteLabel: 'Not',
    noteText: 'Yerel arama ve yerel özetleme motoru ile çalışır.',
    profile: 'Hesap',
    signup: 'Kayıt Ol',
    login: 'Giriş Yap',
    profileMenu: 'Profil',
    settings: 'Ayarlar',
    help: 'Yardım',
    loginTitle: 'Giriş Yap',
    registerTitle: 'Kayıt Ol',
    email: 'E-posta',
    password: 'Şifre',
    confirmPassword: 'Şifre Tekrar',
    name: 'Ad',
    emailPlaceholder: 'ornek@mail.com',
    passwordPlaceholder: 'Şifreniz',
    confirmPlaceholder: 'Şifrenizi tekrar yazın',
    namePlaceholder: 'Adınız',
    switchToRegister: 'Kayıt Ol',
    switchToLogin: 'Giriş Yap',
    logout: 'Çıkış Yap',
    welcome: 'Merhaba',
    registerHint: 'Henüz üye değil misiniz?',
    loginHint: 'Zaten hesabınız var mı?',
    heroBadge: 'SroftTST Turkish Software Team',
    heroTitle: 'Yapay zekâyla güçlendirilmiş yazılım, sohbet ve oyun merkezi.',
    heroDescription: 'SroftTST, Türkçe yazılım geliştirme ekosistemiyle araştırma, sohbet, oyun ve proje yönetimini tek ekranda sunar. Yerel motorlarla hızlı, güvenli ve sade bir deneyim yaşarsınız.',
    researchTitle: 'AI Araştırma Merkezi',
    researchCopy: 'Sorularınızı yazın, yerel arama ve özetleme motoru sonuçları hızlıca hazırlasın.',
    chatTitle: 'Direkt AI Sohbet',
    chatCopy: 'SroftTST yardımcılarıyla doğal bir şekilde sohbet edin, öneriler alın ve hızlı kararları toparlayın.',
    gamesTitle: 'Eğlence ve mini oyun alanı',
    gamesCopy: 'Mini oyun alanında hızlı eğlence, bilişsel testler ve oyun odaklı deneyimler hazırlanıyor.',
    notificationsTitle: 'Duyurular',
    aboutTitle: 'SroftTST Hakkında',
    quickLinksTitle: 'Bağlantılar'
  },
  en: {
    siteTitle: 'SroftTST - Turkish Software Team',
    title: 'SroftTST AI Hub',
    description: 'SroftTST brings together AI-powered software, chat, and games in one place.',
    label: 'Question',
    placeholder: 'Write your question here...',
    submit: 'Research',
    searching: 'Searching... Please wait.',
    done: 'Research completed.',
    error: 'Error',
    noteLabel: 'Note',
    noteText: 'Runs on local search and summarization.',
    profile: 'Account',
    signup: 'Sign Up',
    login: 'Log In',
    profileMenu: 'Profile',
    settings: 'Settings',
    help: 'Help',
    loginTitle: 'Log In',
    registerTitle: 'Sign Up',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    name: 'Name',
    emailPlaceholder: 'example@mail.com',
    passwordPlaceholder: 'Your password',
    confirmPlaceholder: 'Repeat password',
    namePlaceholder: 'Your name',
    switchToRegister: 'Sign Up',
    switchToLogin: 'Log In',
    logout: 'Sign Out',
    welcome: 'Hello',
    registerHint: 'Not registered yet?',
    loginHint: 'Already have an account?',
    heroBadge: 'SroftTST Turkish Software Team',
    heroTitle: 'AI-powered software, chat, and gaming hub.',
    heroDescription: 'SroftTST brings research, chat, games, and project tools into one place with a fast and local-first workflow.',
    researchTitle: 'AI Research Center',
    researchCopy: 'Ask your questions and let the local research engine summarize the results.',
    chatTitle: 'Direct AI Chat',
    chatCopy: 'Chat with the assistant, ask for recommendations, and keep decisions moving quickly.',
    gamesTitle: 'Mini Games Zone',
    gamesCopy: 'Mini games and fast entertainment modules are being added in this space.',
    notificationsTitle: 'Updates',
    aboutTitle: 'About SroftTST',
    quickLinksTitle: 'Quick Links'
  }
};

const languagePicker = document.getElementById('language-picker');
const langButton = document.getElementById('lang-button');
const langMenu = document.getElementById('lang-menu');
const langCurrent = document.getElementById('lang-current');
const profileButton = document.getElementById('profile-button');
const profileMenu = document.getElementById('profile-menu');
const guestActions = document.getElementById('guest-actions');
const userActions = document.getElementById('user-actions');
const userNameLabel = document.getElementById('user-name');
const heroBadge = document.getElementById('hero-badge');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');
const researchTitle = document.getElementById('research-title');
const researchCopy = document.getElementById('research-copy');
const chatTitle = document.getElementById('chat-title');
const chatCopy = document.getElementById('chat-copy');
const gamesTitle = document.getElementById('games-title');
const gamesCopy = document.getElementById('games-copy');
const notificationsTitle = document.getElementById('notifications-title');
const aboutTitle = document.getElementById('about-title');
const quickLinksTitle = document.getElementById('quick-links-title');
const questionLabel = document.getElementById('question-label');
const questionInput = document.getElementById('question');
const submitButton = document.getElementById('submit-button');
const status = document.getElementById('status');
const responseCard = document.getElementById('response');
const signupBtn = document.getElementById('profile-signup');
const loginBtn = document.getElementById('profile-login');
const logoutButton = document.getElementById('logout-button');
const authOverlay = document.getElementById('auth-overlay');
const authModal = document.getElementById('auth-modal');
const authClose = document.getElementById('auth-close');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const registerName = document.getElementById('register-name');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirm = document.getElementById('register-confirm');
const authTitle = document.getElementById('auth-title');
const authEyebrow = document.getElementById('auth-eyebrow');
const loginEmailLabel = document.getElementById('login-email-label');
const loginPasswordLabel = document.getElementById('login-password-label');
const registerNameLabel = document.getElementById('register-name-label');
const registerEmailLabel = document.getElementById('register-email-label');
const registerPasswordLabel = document.getElementById('register-password-label');
const registerConfirmLabel = document.getElementById('register-confirm-label');
const loginFooter = document.querySelector('#login-form .auth-footer');
const registerFooter = document.querySelector('#register-form .auth-footer');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const chatStatus = document.getElementById('chat-status');
const form = document.getElementById('question-form');

let activeLocale = 'tr';
let activeAuthMode = 'login';

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

function getUsers() {
  return JSON.parse(localStorage.getItem('sroft_users') || '{}');
}

function saveUsers(users) {
  localStorage.setItem('sroft_users', JSON.stringify(users));
}

function setCurrentUser(email) {
  localStorage.setItem('sroft_logged_in', email);
}

function getCurrentUser() {
  return localStorage.getItem('sroft_logged_in');
}

function clearCurrentUser() {
  localStorage.removeItem('sroft_logged_in');
}

function updateProfileState() {
  const userEmail = getCurrentUser();
  const users = getUsers();
  if (userEmail && users[userEmail]) {
    const user = users[userEmail];
    guestActions.classList.add('hidden');
    userActions.classList.remove('hidden');
    profileButton.querySelector('.profile-avatar').textContent = user.name.charAt(0).toUpperCase();
    profileButton.querySelector('.profile-label').textContent = user.name;
    userNameLabel.textContent = user.name;
  } else {
    guestActions.classList.remove('hidden');
    userActions.classList.add('hidden');
    profileButton.querySelector('.profile-avatar').textContent = '?';
    profileButton.querySelector('.profile-label').textContent = TRANSLATIONS[activeLocale].profile;
  }
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

function openAuth(mode = 'login') {
  activeAuthMode = mode;
  authOverlay.classList.remove('hidden');
  authModal.classList.remove('hidden');
  setAuthMode(mode);
}

function closeAuth() {
  authOverlay.classList.add('hidden');
  authModal.classList.add('hidden');
}

function setAuthMode(mode) {
  activeAuthMode = mode;
  const locale = TRANSLATIONS[activeLocale];
  const isLogin = mode === 'login';
  tabLogin.classList.toggle('active', isLogin);
  tabRegister.classList.toggle('active', !isLogin);
  loginForm.classList.toggle('hidden', !isLogin);
  registerForm.classList.toggle('hidden', isLogin);
  authTitle.textContent = isLogin ? locale.loginTitle : locale.registerTitle;
  authEyebrow.textContent = locale.profile;
  loginEmailLabel.textContent = locale.email;
  loginEmail.placeholder = locale.emailPlaceholder;
  loginPasswordLabel.textContent = locale.password;
  loginPassword.placeholder = locale.passwordPlaceholder;
  loginForm.querySelector('.auth-submit').textContent = locale.loginTitle;
  loginFooter.innerHTML = `${locale.registerHint} <button id="switch-register" class="link-button" type="button">${locale.switchToRegister}</button>`;
  registerNameLabel.textContent = locale.name;
  registerName.placeholder = locale.namePlaceholder;
  registerEmailLabel.textContent = locale.email;
  registerEmail.placeholder = locale.emailPlaceholder;
  registerPasswordLabel.textContent = locale.password;
  registerPassword.placeholder = locale.passwordPlaceholder;
  registerConfirmLabel.textContent = locale.confirmPassword;
  registerConfirm.placeholder = locale.confirmPlaceholder;
  registerForm.querySelector('.auth-submit').textContent = locale.registerTitle;
  registerFooter.innerHTML = `${locale.loginHint} <button id="switch-login" class="link-button" type="button">${locale.switchToLogin}</button>`;
  attachAuthSwitchListeners();
}

function attachAuthSwitchListeners() {
  const switchRegisterBtn = document.getElementById('switch-register');
  const switchLoginBtn = document.getElementById('switch-login');
  if (switchRegisterBtn) {
    switchRegisterBtn.addEventListener('click', () => setAuthMode('register'));
  }
  if (switchLoginBtn) {
    switchLoginBtn.addEventListener('click', () => setAuthMode('login'));
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clearAuthForms() {
  loginEmail.value = '';
  loginPassword.value = '';
  registerName.value = '';
  registerEmail.value = '';
  registerPassword.value = '';
  registerConfirm.value = '';
}

function appendChatMessage(sender, text) {
  const bubble = document.createElement('article');
  bubble.className = `message ${sender}`;
  bubble.innerHTML = `<div class="message-meta">${sender === 'user' ? 'Sen' : 'SroftTST'}</div><p>${text}</p>`;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function fallbackReply(input) {
  const lowered = input.toLowerCase();
  if (lowered.includes('kod') || lowered.includes('program')) {
    return 'SroftTST, temiz mimariye ve üretken kod akışlarına odaklanan yazılım önerileri sunar. İstersen mevcut yapı, test ve dağıtım yaklaşımını birlikte planlayabiliriz.';
  }
  if (lowered.includes('oyun') || lowered.includes('game')) {
    return 'Oyun odaklı deneyimler için mini oyun alanı, hızlı prototip ve bilişsel egzersizler hazırlanıyor. En yakın içerikleri birlikte listeleyebilirim.';
  }
  return 'Anlayamadım, biraz daha detay verirsen sana doğru ve pratik bir öneri sunarım. Hangi alanda destek istiyorsun?';
}

function handleRegistration(event) {
  event.preventDefault();
  const locale = TRANSLATIONS[activeLocale];
  const name = registerName.value.trim();
  const email = registerEmail.value.trim().toLowerCase();
  const password = registerPassword.value;
  const confirm = registerConfirm.value;

  if (!name || !email || !password || !confirm) {
    alert(`${locale.error}: Lütfen tüm alanları doldurun.`);
    return;
  }
  if (!isValidEmail(email)) {
    alert(`${locale.error}: Geçerli bir e-posta girin.`);
    return;
  }
  if (password.length < 6) {
    alert(`${locale.error}: Şifre en az 6 karakter olmalıdır.`);
    return;
  }
  if (password !== confirm) {
    alert(`${locale.error}: Şifreler eşleşmiyor.`);
    return;
  }

  const users = getUsers();
  if (users[email]) {
    alert(`${locale.error}: Bu e-posta zaten kayıtlı.`);
    return;
  }

  users[email] = { name, email, password };
  saveUsers(users);
  setCurrentUser(email);
  updateProfileState();
  closeAuth();
  clearAuthForms();
  status.textContent = locale.done;
}

function handleLogin(event) {
  event.preventDefault();
  const locale = TRANSLATIONS[activeLocale];
  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value;

  if (!email || !password) {
    alert(`${locale.error}: Lütfen tüm alanları doldurun.`);
    return;
  }
  const users = getUsers();
  const user = users[email];
  if (!user || user.password !== password) {
    alert(`${locale.error}: E-posta veya şifre yanlış.`);
    return;
  }

  setCurrentUser(email);
  updateProfileState();
  closeAuth();
  clearAuthForms();
  status.textContent = locale.done;
}

function handleLogout() {
  clearCurrentUser();
  updateProfileState();
  status.textContent = TRANSLATIONS[activeLocale].logout + ' başarılı.';
}

function updateAuthLabels() {
  const locale = TRANSLATIONS[activeLocale];
  authTitle.textContent = activeAuthMode === 'login' ? locale.loginTitle : locale.registerTitle;
  authEyebrow.textContent = locale.profile;
  tabLogin.textContent = locale.loginTitle;
  tabRegister.textContent = locale.registerTitle;
  loginEmailLabel.textContent = locale.email;
  loginEmail.placeholder = locale.emailPlaceholder;
  loginPasswordLabel.textContent = locale.password;
  loginPassword.placeholder = locale.passwordPlaceholder;
  loginForm.querySelector('.auth-submit').textContent = locale.loginTitle;
  loginFooter.innerHTML = `${locale.registerHint} <button id="switch-register" class="link-button" type="button">${locale.switchToRegister}</button>`;
  registerNameLabel.textContent = locale.name;
  registerName.placeholder = locale.namePlaceholder;
  registerEmailLabel.textContent = locale.email;
  registerEmail.placeholder = locale.emailPlaceholder;
  registerPasswordLabel.textContent = locale.password;
  registerPassword.placeholder = locale.passwordPlaceholder;
  registerConfirmLabel.textContent = locale.confirmPassword;
  registerConfirm.placeholder = locale.confirmPlaceholder;
  registerForm.querySelector('.auth-submit').textContent = locale.registerTitle;
  registerFooter.innerHTML = `${locale.loginHint} <button id="switch-login" class="link-button" type="button">${locale.switchToLogin}</button>`;
  attachAuthSwitchListeners();
}

function setLocale(code) {
  activeLocale = TRANSLATIONS[code] ? code : 'en';
  const locale = { ...TRANSLATIONS.tr, ...TRANSLATIONS[activeLocale] };
  document.documentElement.lang = activeLocale;
  document.title = locale.siteTitle;
  heroBadge.textContent = locale.heroBadge;
  heroTitle.textContent = locale.heroTitle;
  heroDescription.textContent = locale.heroDescription;
  researchTitle.textContent = locale.researchTitle;
  researchCopy.textContent = locale.researchCopy;
  chatTitle.textContent = locale.chatTitle;
  chatCopy.textContent = locale.chatCopy;
  gamesTitle.textContent = locale.gamesTitle;
  gamesCopy.textContent = locale.gamesCopy;
  notificationsTitle.textContent = locale.notificationsTitle;
  aboutTitle.textContent = locale.aboutTitle;
  quickLinksTitle.textContent = locale.quickLinksTitle;
  questionLabel.textContent = locale.label;
  questionInput.placeholder = locale.placeholder;
  submitButton.textContent = locale.submit;
  profileButton.querySelector('.profile-label').textContent = locale.profile;
  signupBtn.textContent = locale.signup;
  loginBtn.textContent = locale.login;
  logoutButton.textContent = locale.logout;
  langCurrent.textContent = LANGUAGES.find((lang) => lang.code === activeLocale)?.name || 'English';
  renderLanguageMenu();
  updateAuthLabels();
  updateProfileState();
}

function initializeAuth() {
  signupBtn.addEventListener('click', () => openAuth('register'));
  loginBtn.addEventListener('click', () => openAuth('login'));
  logoutButton.addEventListener('click', () => {
    handleLogout();
    hideMenu(profileMenu, profileButton);
  });
  authClose.addEventListener('click', closeAuth);
  authOverlay.addEventListener('click', closeAuth);
  tabLogin.addEventListener('click', () => setAuthMode('login'));
  tabRegister.addEventListener('click', () => setAuthMode('register'));
  loginForm.addEventListener('submit', handleLogin);
  registerForm.addEventListener('submit', handleRegistration);
  attachAuthSwitchListeners();
}

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

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  appendChatMessage('user', message);
  chatInput.value = '';
  chatStatus.textContent = TRANSLATIONS[activeLocale].searching;

  try {
    const res = await fetch('/.netlify/functions/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: message })
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || TRANSLATIONS[activeLocale].error);
    }

    const data = await res.json();
    appendChatMessage('assistant', data.answer);
    chatStatus.textContent = TRANSLATIONS[activeLocale].done;
  } catch (error) {
    appendChatMessage('assistant', fallbackReply(message));
    chatStatus.textContent = `${TRANSLATIONS[activeLocale].error}: ${error.message}`;
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const initialLocale = getUserLocale();
  renderLanguageMenu();
  setLocale(initialLocale);
  initializeAuth();
  updateProfileState();
});
