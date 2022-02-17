import { getScrollBarWidth } from "./getScrollbarWidth";

const disableScroll = () => {
  /**
   * Disable Scroll.
   * preserve layout dimensions and prevent jerking effect.
   */
  const body = document.getElementsByTagName('body')[0];
  const scrollable = body.clientHeight > window.innerHeight;
  scrollable && (body.style.paddingRight = getScrollBarWidth())
  // if this is executed, scrollbar width turns into zero
  body.style.overflow = 'hidden';
}

export {
  disableScroll,
}
