import Link from 'next/link';
import s from './style/index.module.scss';

function Anchor({
  children = '',
  href = '#',
  className = '',
  icon,
  ...remaining
}) {
  return (
    <span
      className={`${s.anchor}`}
    >
      <Link
        href={href}
      >
        <a
          className={`${className} ${s.link}`}
          {
          ...remaining
          }
        >
          {
            icon
              ? (
                <span className={s.icon}>
                  {
                    icon
                  }
                </span>
              )
              : null
          }

          {
            children
          }
        </a>
      </Link>
    </span>
  )
}

export default Anchor;

export {
  Anchor,
};
