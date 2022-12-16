const {documentElement, body} = document;
export function setScrollBarWidthToCSS() {
  documentElement.style.setProperty(
      '--scrollbarWidth',
      `${window.innerWidth - body.clientWidth}px`
  );
}
