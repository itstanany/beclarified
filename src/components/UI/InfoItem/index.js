import s from './style/index.module.scss';

function InfoItem({ right = "", left = "" } = {}) {
  return (
    <div className={s.item}>
      <span className={s.itemIcon}>
        {
          right[0]
          || '~'
        }
      </span>
      <p className={s.right}>
        {
          right
        }
      </p>
      <p className={s.left} dir="ltr">
        {
          left
        }
      </p>
    </div>

  )
}

export default InfoItem
export {
  InfoItem,
};
