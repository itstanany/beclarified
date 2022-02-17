import s from './style/index.module.scss';

const Subtitle = ({
  children,
  className = '',
  ...remaining
}) => {
  return (
    <p
      className={`${s.subtitle} ${className}`}
      {
      ...remaining
      }
    >
      {
        children
      }
    </p>
  )
}

export default Subtitle;

export {
  Subtitle,
};
