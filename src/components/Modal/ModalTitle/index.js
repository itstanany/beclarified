import s from './style/index.module.scss';

const ModalTitle = ({ children }) => {
  return (
    <h5 className={s.modalTitle}>
      {
        children
      }
    </h5>
  );
}

// const memoized = memo(ModalTitle)

export default ModalTitle;
// export default memoized;

export {
  // memoized as ModalTitle,
  ModalTitle,
};
