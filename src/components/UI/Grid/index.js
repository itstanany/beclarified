import { GridItem } from './GridItem';
import s from './style/index.module.scss';

function Grid({
  children,
  className = '',
  ...remaining
} = {}) {
  return (
    <div
      className={`${s.grid} ${className}`}
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
Grid.Item = GridItem

export default Grid;

export {
  Grid,
}
