import { createPortal } from "react-dom";
import { canUseDOM } from ".."

const createUniversalPortal = ({ children, selector }) => {
  if (!canUseDOM()) {
    console.log('inside createUniversalPortal CAN\'T USE DOM');
    console.log({ children: JSON.stringify(children.props) })
    return null;
  }
  console.log('inside create Universal portal');
  console.log({ children })
  return createPortal(children, document.querySelector(selector));
}

export {
  createUniversalPortal,
};
