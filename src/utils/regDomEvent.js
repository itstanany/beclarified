import { canUseDOM } from "./canUseDOM";

const regDomEvent = ({ cb = () => ({}), eName = '' } = {}) => {
  if (canUseDOM()) {
    document.addEventListener(eName, cb);
  }
}

export {
  regDomEvent,
}
