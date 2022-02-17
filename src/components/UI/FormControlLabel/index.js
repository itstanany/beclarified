import ControlLabel from './ControlLabel';
import FormControl from './FormControl';
import s from './style/index.module.scss';
/**
 * 
 * @param {object} param0 props:
 *    control: JSX form control component
 *    label: JSX Label component
 *    variant: either "control" or "label" to indicate which item occupy remaining space
 * @returns 
 */
function FormControlLabel({
  control,
  label,
  variant,
  children,
}) {
  return (
    // fcl === form control label
    <label className={s.FCL}>
      {
        children
      }
    </label>
  )
}

FormControlLabel.Control = FormControl;
FormControlLabel.Label = ControlLabel;

export default FormControlLabel;

export {
  FormControlLabel,
}
