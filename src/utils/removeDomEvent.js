import { canUseDOM } from "./canUseDOM";

const removeDomEvent = ({ cb = () => ({}), eName = '' } = {}) => {
  if (canUseDOM()) {
    document.removeEventListener(eName, cb);
  }
}

export {
  removeDomEvent,
}
