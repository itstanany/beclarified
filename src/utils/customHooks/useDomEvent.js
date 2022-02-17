import { useEffect } from "react";
import { regDomEvent } from "../regDomEvent";
import { removeDomEvent } from "../removeDomEvent";

const useDomEvent = ({ cb, eName } = {}) => {
  useEffect(() => {
    regDomEvent({ eName, cb })
    return () => {
      removeDomEvent({ eName, cb })
    }
  }, [eName, cb]);
}

export {
  useDomEvent,
}
