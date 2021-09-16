/**
 * Modal Header
 * It shows:
 *  on the right: Title and subtitle
 *  on the left: close btn by default
 *    user can disable this btn by passing: closeBtn=false
 */

import { useContext } from 'react';
import { Button } from '../../UI/Button';
import { ModalContext } from '../ModalContext';
import s from './style/index.module.scss';


const ModalHeader = ({ children, closeButton = true, ...remaining }) => {
  const modalContext = useContext(ModalContext);
  return (
    <div
      className={s.modalHeader}
      {...remaining}
    >
      <div>
        {
          children
        }
      </div>
      <div>
        {
          closeButton
            ? (
              <Button
                onClick={modalContext.onClose}
              >
                X
              </Button>
            )
            : null
        }
      </div>
    </div>)
};

export default ModalHeader;

export {
  ModalHeader,
}
