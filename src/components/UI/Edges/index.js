import s from './style/index.module.scss';

function Edges({
  right,
  left,
}) {
  return (
    <div className={s.edges}>
      <span>
        {
          right
        }
      </span>
      <span>
        {
          left
        }
      </span>
    </div>
  )
}

export default Edges;

export {
  Edges,
}
