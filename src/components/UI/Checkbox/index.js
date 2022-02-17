import s from './style/index.module.scss';

function Checkbox({
  name,
  id
  , checked = false,
  onChange = (() => ({})),
  dir = "rtl"
  , ...remaining } = {}) {
  return (
    <div className={s.checkbox}>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={s.checkboxInput}
        checked={checked}
        dir={dir}
        onChange={onChange}
        {...remaining}
      />
    </div>
  )
}

export default Checkbox;

export {
  Checkbox,
};
