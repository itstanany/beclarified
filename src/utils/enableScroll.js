const enableScroll = () => {
  /**
   * remove padding to make space for scrollbar
   * unset the overflow style prop
   */
  const body = document.getElementsByTagName('body')[0];
  const paddedRight = body.style.paddingRight;
  paddedRight && (body.style.paddingRight = '');
  body.style.overflow = '';
}

export {
  enableScroll,
};
