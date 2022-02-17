import { useCallback, useEffect, useState } from 'react';
import s from './style/index.module.scss';
import { stopPropagation } from '../../../utils';
import { useClickEvent, useEscKeyPress, useKeyDownEvent } from '../../../utils/customHooks';


function Toggler({
  toggler = '',
  menu = '',
}) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = useCallback((e) => {
    /**
     * Toggle menu visibility
     */
    // allow open and hide menu by clicking on the ticks
    stopPropagation(e);
    setShowMenu((prevSt) => !prevSt);
  }, []);

  const closeMenu = useCallback((e) => {
    setShowMenu(false)
  }, []);

  const closeEsc = useEscKeyPress({ cb: closeMenu });

  useClickEvent({ cb: closeMenu })
  useKeyDownEvent({ cb: closeEsc });


  return (
    <div className={s.wrapper}>
      <div
        // className={`${s.toggler}`}
        onClick={toggleMenu}
      >
        {
          toggler
        }
      </div>
      {
        showMenu
          ? (
            <span
              className={s.menu}
              onClick={stopPropagation}
            >
              {
                menu
              }
            </span>
          )
          : null
      }
    </div>
  )
}

export default Toggler

export {
  Toggler,
}
