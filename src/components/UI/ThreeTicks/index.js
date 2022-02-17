import s from './style/index.module.scss';
import Toggler from '../Toggler';


function ThreeTicks({
  menu = '',
}) {
  return (
    <Toggler
      toggler={(
        <button
          className={s.threeTicks}
        >
          <span className={s.tick}></span>
          <span className={s.tick}></span>
          <span className={s.tick}></span>
        </button>
      )
      }
      menu={(menu)}
    />
  )
}

export default ThreeTicks
