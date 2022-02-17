import { useDomEvent } from "./useDomEvent";

const useKeyDownEvent = ({ cb }) => useDomEvent({ cb, eName: 'keydown' });

export {
  useKeyDownEvent,
}
