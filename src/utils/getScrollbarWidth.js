const getScrollBarWidth = () => {
  /**
   * Return Width of the scroll bar in px if more than 0
   *  or 0 without a unit
   */
  const documentWidth = document.documentElement.clientWidth;
  const windowWidth = window.innerWidth;
  const width = windowWidth - documentWidth;
  return width ? `${width}px` : 0;
}

export {
  getScrollBarWidth,
};
