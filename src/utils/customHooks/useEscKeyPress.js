import { useCallback } from "react";
import { onEscKeyPress } from "../onEscKeyPress";


/**
 * Custom Hook to execute a supplied callback when escape key is pressed
 * @param {object} param0 props
 *    "cb": callback to be executed when esc key is clicked
 * @returns 
 */
const useEscKeyPress = ({ cb = () => ({}) } = {}) => useCallback(
  (e) => {
    onEscKeyPress({ e, cb })
  },
  [cb],
);

export {
  useEscKeyPress,
}
