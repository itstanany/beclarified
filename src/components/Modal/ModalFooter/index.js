/**
 * Footer section of the modal
 */

import s from './style/index.module.scss';

const ModalFooter = ({
  children,
  className = '',
  ...remaining
}) => {
  return (
    <div
      className={`${s.modalFooter} ${className}`}
      {...remaining}
    >
      {
        children
      }
    </div>
  )
}

export default ModalFooter;

export {
  ModalFooter,
};
