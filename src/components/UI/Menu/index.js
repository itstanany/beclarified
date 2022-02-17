import s from './style/index.module.scss';

function Menu({
  children,
  className = '',
  gutterBottom,
  ...remaining
}) {
  return (
    <ul
      className={`${s.menu} ${className} ${gutterBottom ? s.gutterBottom : ''}`}
      {
      ...remaining
      }
    >
      {
        children
      }
    </ul>
  )
}

export default Menu;

export {
  Menu,
};
