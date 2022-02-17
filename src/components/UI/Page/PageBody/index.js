
import s from './style/index.module.scss'

const PageBody = ({
  children,
  className = '',
  ...remaining
}) => {
  return (
    <div
      className={`${s.body} ${className}`}
      {
      ...remaining
      }
    >
      {
        children
      }
    </div>
  )
}

export default PageBody;

export {
  PageBody,
};
