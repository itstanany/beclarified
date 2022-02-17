import s from './style/index.module.scss';

const PageFooter = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${s.footer} ${className}`}>
      {
        children
      }
    </div>
  )
}

export default PageFooter;

export {
  PageFooter,
};
