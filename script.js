const messages = [
  "Hey, I just want to share what's on my heart because you matter so much to me. I know lately things may have felt heavy, and I want to start by saying how much I appreciate you. I see how kind, patient, and giving you are, even when life or our relationship isn't easy. I see the love and effort you put into us every day, and I want you to know that it never goes unnoticed. I'm grateful for you, for us, and for the connection we've built — a connection where we can be honest, support each other, and grow together. You are deeply cherished, and I want to always honor the trust, care, and love we share.",

  "I also want to apologize for the timing of when I shared my feelings about Nico. I know I didn't wait until you felt ready to talk, and I'm sorry if that added weight to your heart. When I noticed your account was logged out, I felt uneasy, and I didn't ask first — that was my mistake. I ended up opening up at a time that wasn't ideal, not because I wanted to blame you, but because it had been on my mind constantly. I couldn't stop thinking about it, and I didn't want to leave anything unspoken.",

  "I fully trust you and the love we share, and I am confident that you won't replace me with anyone else. That's why I want to gently share my feelings about the situation — not to control you or your friendships, but so we can both feel safe, respected, and comfortable. I know Nico is your friend, and I know your intentions toward him are purely platonic. I truly trust that. At the same time, I feel a bit uneasy because he has feelings for you, and I worry that it could make things complicated for him, or for us. I don't want you to feel guilty about this, because I know your heart and your loyalty are with me. I just wanted to be honest about my feelings so we can continue building trust together.",

  "I don't want you to feel controlled, pressured, trapped, anxious, insecure, or unimportant. I want you to feel safe, secure, at ease, prioritized, supported, and heard. You are free to have your friendships, and I want you to feel comfortable in them. If it helps both of us feel secure, I'd appreciate it if interactions with him were more limited — but only if you feel it's right for you. This isn't about taking away your freedom, it's about helping us both feel respected, secure, and at ease in our relationship.",

  "I know I've made mistakes when I snap or react without thinking, and I know those moments may have added weight to your heart. I want you to know that I'm trying every day to be better, to communicate more clearly, and to be the partner you can feel safe with. I hope that even when I fall short, you can see my love and care for you.",

  "You might be having second thoughts sometimes, and I want you to know that you haven't been wrong in choosing me. I am committed to you, to us, and to building a relationship where you feel valued, treasured, safe, and loved every day. I want you to feel confident that I am here — fully for you — and that I will always prioritize your feelings and well-being.",

  "I care so deeply about you, and I want you to feel supported, understood, and cherished. I'm here, fully present, and ready to grow together through anything life brings. I hope you can feel the love, care, and respect I have for you, and know that everything I do comes from wanting to protect and nurture what we share.",

  "You're treasured, loved, and deeply valued. I'm learning, I'm trying, and I'll always be here for you."
];

// ── DOM REFS ──
const landingPage   = document.getElementById('landing-page');
const messagePage   = document.getElementById('message-page');
const exitPage      = document.getElementById('exit-page');
const messageText   = document.getElementById('message-text');
const nextBtn       = document.getElementById('nextBtn');
const backBtn       = document.getElementById('backBtn');
const startBtn      = document.getElementById('startBtn');
const restartBtn    = document.getElementById('restartBtn');
const exitBackBtn   = document.getElementById('exitBackBtn');
const progressBar   = document.getElementById('progress-bar');
const pageCounter   = document.getElementById('page-counter');
const music         = document.getElementById('bg-music');

let index = 0;

// ── BACKGROUND SLIDESHOW ──
const slides = document.querySelectorAll('.bg-slide');
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 5000);

// ── FLOATING HEARTS ──
const heartsLayer = document.getElementById('hearts-layer');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💙';
  heart.style.left = (Math.random() * 95) + 'vw';
  const dur = (7 + Math.random() * 7).toFixed(1) + 's';
  heart.style.animationDuration = dur;
  heart.style.fontSize = (0.9 + Math.random() * 1.1).toFixed(2) + 'rem';
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), parseFloat(dur) * 1000);
}
setInterval(createHeart, 600);

// ── SHOW MESSAGE ──
function showMessage(i) {
  messageText.classList.remove('visible');
  setTimeout(() => {
    messageText.textContent = messages[i];
    messageText.classList.add('visible');
    // scroll to top of message body
    messageText.parentElement.scrollTop = 0;
  }, 120);
  // progress
  const pct = ((i + 1) / messages.length) * 100;
  progressBar.style.width = pct + '%';
  pageCounter.textContent = (i + 1) + ' / ' + messages.length;
  // back button
  backBtn.disabled = (i === 0);
}

// ── START ──
startBtn.addEventListener('click', () => {
  landingPage.classList.add('fade-out');
  music.play().catch(() => {});
  setTimeout(() => {
    landingPage.style.display = 'none';
    messagePage.classList.remove('hidden');
    index = 0;
    showMessage(index);
  }, 800);
});

// ── NEXT ──
nextBtn.addEventListener('click', () => {
  if (index < messages.length - 1) {
    index++;
    showMessage(index);
  } else {
    // last message → show exit page
    messagePage.classList.add('hidden');
    exitPage.classList.remove('hidden');
  }
});

// ── BACK ──
backBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    showMessage(index);
  }
});

// ── EXIT BACK (go back to last message) ──
exitBackBtn.addEventListener('click', () => {
  exitPage.classList.add('hidden');
  messagePage.classList.remove('hidden');
  index = messages.length - 1;
  showMessage(index);
});

// ── RESTART ──
restartBtn.addEventListener('click', () => {
  exitPage.classList.add('hidden');
  messagePage.classList.remove('hidden');
  index = 0;
  showMessage(index);
});

