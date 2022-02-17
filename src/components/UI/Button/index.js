import s from './style/index.module.scss';

function Button({
  children,
  variant = '',
  ...remaining }) {
  return (
    <button
      className={`${s.btn} ${s[variant]}`}
      {...remaining}
    >
      <span className={s.text}>
        {children}
      </span>
    </button>
  )
}

export default Button

export {
  Button,
};
