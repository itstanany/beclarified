/**
 * Body section of the Modal
 */
import s from './style/index.module.scss'

const ModalBody = ({ children }) => {
  return (
    <div className={s.modalBody}>
      {
        children
      }
    </div>
  )
}

export default ModalBody;

export {
  ModalBody,
};
