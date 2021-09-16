// todo prevent scroll outside modal
// todo remove background transparency


import { useCallback, useEffect } from 'react';
// import { createPortal } from 'react-dom'
import { ModalContext } from './ModalContext';
import { ModalHeader } from './ModalHeader';
import { ModalSubtitle } from './ModalSubtitle';
import { ModalTitle } from './ModalTitle';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import s from './style/index.module.scss';
import { createUniversalPortal, useEscKeyPress } from '../../utils/customHooks';
import { canUseDOM, enableScroll, disableScroll, stopPropagation, } from '../../utils';



function Modal({ show, title = null, onClose, children, ...remaining } = {}) {

  const closeEsc = useEscKeyPress({ cb: onClose });

  useEffect(() => {
    // bug - known, doesn't prevent touch safari scroll
    if (canUseDOM()) {
      show
        ? (
          disableScroll()
        )
        : enableScroll()
    }
    return () => canUseDOM() && enableScroll();
  }, [show])

  useEffect(() => {
    document && document.addEventListener('keydown', closeEsc);
    return () => {
      document && document.removeEventListener('keydown', closeEsc);
    }
  }, [closeEsc]);

  console.log('inside modal component and children are');
  console.log({ children })


  return (
    createUniversalPortal({
      children: (
        <ModalContext.Provider
          value={
            { show, title, onClose, children, ...remaining }
          }
        >
          <div className={s.dialog}>
            <div
              className={`${s.modalDropBack} ${(show ? s.show : '')}`}
              onClick={onClose}
            ></div>
            <div
              className={`${s.modal} ${(show ? s.show : '')}`}
              onClick={onClose}
            >
              {
                // optimization: decrease mounting time of hidden modal
                show
                  ? (
                    <div className={s.content} onClick={stopPropagation}>
                      {
                        children
                      }
                    </div>

                  )
                  : null
              }
            </div>
          </div>
        </ModalContext.Provider>
      ),
      // selector: '#__next'
      selector: 'body'
    })
  );
}


Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.SubTitle = ModalSubtitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

// const ModalPortal = createUniversalPortal({ children: Modal, selector: '#__next' });

// export default ModalPortal
export default Modal

export {
  /* ModalPortal as */ Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
  ModalSubtitle,
  ModalFooter,
}
