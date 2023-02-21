// ======================= Change Background  Header =======================
const header = document.getElementById('header');

function scrollHeader() {
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// ================= Scroll Up =================
const scrollUp = document.getElementById('scroll-up');
const navMenu = document.getElementById('nav-menu');

function showScrollUp() {
  const scrollY = window.scrollY;

  if (scrollY > 300) {
    scrollUp.classList.add('scroll-up');
  } else {
    scrollUp.classList.remove('scroll-up');
  }

  if (navMenu) {
    closeMenu();
  }
}

window.addEventListener('scroll', showScrollUp);

// ============= Show Menu and Close Menu =======================
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

function showMenu() {
  if (navToggle) {
    navMenu.classList.add('show-menu');
  }
}

function closeMenu() {
  if (navClose) {
    navMenu.classList.remove('show-menu');
  }
}

navToggle.addEventListener('click', showMenu);
navClose.addEventListener('click', closeMenu);

// ================== Active Link ===============
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((navLink) => navLink.addEventListener('click', closeMenu));

// ===================== Show Video =======================
const backgroundVideo = document.getElementById('invite-video');
const videoPlay = document.querySelector('.video__play');
const body = document.body;
const videoIcon = document.querySelector('.invite__icon');

function showVideo() {
  if (this) {
    backgroundVideo.classList.add('show__background-video');
    videoPlay.classList.add('show-video');
    body.classList.add('disable-scroll');
    videoPlay.play();
    videoPlay.currentTime = 0;
  }
}
videoIcon.addEventListener('click', showVideo);


// ===================== Remove Video ===========================
const closeVideo = document.getElementById('close-video');

function removeVideo() {
  if (this) {
    backgroundVideo.classList.remove('show__background-video');
    videoPlay.classList.remove('show-video');
    body.classList.remove('disable-scroll');
    videoPlay.pause();
  }
}

closeVideo.addEventListener('click', removeVideo);

// ================ CHANGE THEME ========================
const nameTheme = document.getElementById('theme-name');
const buttonTheme = document.getElementById('theme-button');

const selectTheme = localStorage.getItem('select-theme');
const selectThemeButton = localStorage.getItem('select-button');
const selectThemeName = localStorage.getItem('select-name');

const getCurrentTheme = () =>
  body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentButton = () =>
  buttonTheme.classList.contains('ri-sun-fill')
    ? 'ri-moon-fill'
    : 'ri-sun-fill';
const getCurrentName = () => {
  nameTheme.innerText =
    nameTheme.innerText === 'Light theme' ? 'Dark theme' : 'Light theme';
};

if (selectTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectTheme === 'dark' ? 'add' : 'remove'](
    'dark-theme'
  );
  buttonTheme.classList[
    selectThemeButton === 'ri-moon-line' ? 'add' : 'remove'
  ]('ri-sun-fill');

  nameTheme.innerText =
    selectThemeName.innerText === 'Dark mode' ? 'Light mode' : 'Dark mode';
}

function changeTheme() {
  buttonTheme.classList.toggle('ri-sun-fill');
  body.classList.toggle('dark-theme');

  localStorage.setItem('select-theme', getCurrentTheme());
  localStorage.setItem('select-button', getCurrentButton());
  localStorage.setItem('select-name', getCurrentName());
}

buttonTheme.addEventListener('click', changeTheme);

// ===================== LOADING WEBSITE =========================
const loadingAnimation = document.getElementById("loading");

function loadingAnimate(){
  setTimeout(() => {
    loadingAnimation.classList.add("remove-loading");
    body.classList.remove("loading");
  }, 2000)
}

window.addEventListener("load", loadingAnimate);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2000,
});

sr.reveal(
  `.services__data-title,
    .footer__data, 
    .footer__rights,
    .invite__title,
    .invite__video,
    .price__title, 
    .footer__logo`,
  {
    origin: 'top',
    interval: 100,
  }
);

sr.reveal(
  `.about__data, 
    .about__item,
    .services__img,
    .home__img, 
    .services__icon,
    .invite__img-one,
    .price__item:nth-child(1), 
    .price__item:nth-child(3)`,
  {
    origin: 'left',
    interval: 100,
  }
);

sr.reveal(
  `.about__text, 
    .video__content,
    .subscribe__form, 
    .home__data,
    .service__reference, 
    .invite__img-two, 
    .price__item:nth-child(2)`,
  {
    origin: 'right',
    interval: 100,
  }
);

sr.reveal(
  `.about__button,
  .services__button,
  .invite__description,
  .footer__list-two,
  .footer__list-four,
  .footer__list-one,
  .footer__list-three`,
  {
    origin: 'bottom',
    interval: 100,
  }
);
