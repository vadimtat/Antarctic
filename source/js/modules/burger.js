const iconMenu = document.querySelector('.main-nav__toggle')
const menuBody = document.querySelector('.main-nav')
const headerLogo = document.querySelector('.header-logo')

if (iconMenu) {
  iconMenu.addEventListener("click", function clickButton(e) {
    iconMenu.classList.toggle('main-nav__toggle--active');
    menuBody.classList.toggle('main-nav--active');
    headerLogo.classList.toggle('header-logo--active')
  });
}

let menuLinks = document.querySelectorAll('.navigation__link[data-goto]');
export function initMenu() {
  clickMenuBurger(e)
  clickButton(e)
}
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top
      if (iconMenu.classList.contains('main-nav__toggle--active')) {
        iconMenu.classList.remove('main-nav__toggle--active')
        menuBody.classList.remove('main-nav--active')
        headerLogo.classList.add('header-logo--active')
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
