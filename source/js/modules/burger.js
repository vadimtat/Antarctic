const iconMenu = document.querySelector('.header__toggle');
const menuBody = document.querySelector('.main-nav');
const headerLogo = document.querySelector('.header__logo');
const menuOverlay = document.querySelector('.main-nav__overlay');


export function initMenu() {
  menuBody.classList.remove('main-nav--nojs');
  if (iconMenu) {
    iconMenu.addEventListener('click', toggleState);
  }
  menuBody.addEventListener('click', ({ target }) => {
    if (target.href) {
      toggleState();
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      toggleState();
    }
  });
}
function toggleState() {
  iconMenu.classList.toggle('header__toggle--active');
  menuBody.classList.toggle('main-nav--active');
  headerLogo.classList.toggle('header__logo--active');
  document.body.classList.toggle('scroll-lock');
}
