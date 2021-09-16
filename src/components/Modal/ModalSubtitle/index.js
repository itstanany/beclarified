// Modal subtitle

import s from './style/index.module.scss';

const ModalSubtitle = ({ children }) => {
  return (
    <p className={s.modalSubtitle}>
      {
        children
      }
    </p>
  )
}

export default ModalSubtitle;

export {
  ModalSubtitle,
};
