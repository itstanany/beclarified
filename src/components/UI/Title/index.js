import s from './style/index.module.scss';

const Title = ({
  children,
  className = '',
  ...remaining
} = {}) => {
  return (
    <h5
      className={`${s.title} ${className}`}
      {
      ...remaining
      }
    >
      {
        children
      }
    </h5>
  );
}

export default Title;

export {
  Title,
};
