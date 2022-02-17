import s from './style/index.module.scss';

function GridItem(
  {
    children,
    className = '',
    xs = 12,
    ...remaining
  }
) {
  return (
    <div
      className={`${s[`col-xs-${xs}`]} ${s.item} ${className}`}
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

export default GridItem;

export {
  GridItem,
}
