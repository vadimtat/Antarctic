const productCards = document.querySelectorAll('.product-card');
export function hoverCard() {
  productCards.forEach((productCard) => {
    productCard.addEventListener('mouseover', () => {
      const productButton = productCard.querySelector('[autofocus]');
      productButton.focus();
    });
  });
}
