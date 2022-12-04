const iconMenu = document.querySelector('.header-toggle');
const menuBody = document.querySelector('.main-nav');
const headerLogo = document.querySelector('.header-logo');
menuBody.classList.remove('main-nav--nojs');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('header-toggle--active');
    menuBody.classList.toggle('main-nav--active');
    headerLogo.classList.toggle('header-logo--active');
    e.preventDefault();
  });
}
export function initMenu() {
  if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', onMenuLinkClick);
    });
  }
}
let menuLinks = document.querySelectorAll('[data-goto]');
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    gotoBlock.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    if (iconMenu.classList.contains('header-toggle--active')) {
      iconMenu.classList.remove('header-toggle--active');
      menuBody.classList.remove('main-nav--active');
      headerLogo.classList.add('header-logo--active');
    }
    e.preventDefault();
  }
}
