/**
 * Modal Header
 * It shows:
 *  on the right: Title and subtitle
 *  on the left: close btn by default
 *    user can disable this btn by passing: closeBtn=false
 */

import s from './style/index.module.scss';


const PageHeader = ({
  children,
  className = '',
  ...remaining
}) => {
  return (
    <div
      className={`${s.header} ${className}`}
      {...remaining}
    >
      {
        children
      }
    </div>)
};

export default PageHeader;

export {
  PageHeader,
}
