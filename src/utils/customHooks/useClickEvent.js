import { useDomEvent } from "./useDomEvent";

const useClickEvent = ({ cb }) => useDomEvent({ cb, eName: 'click' });

export {
  useClickEvent,
}
