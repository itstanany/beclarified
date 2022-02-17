const onEscKeyPress = ({ e, cb }) => {
  /**
   * Call callback with event object as an arg when escape key is pressed
   */
  if ((e.charCode || e.keyCode) === 27) {
    cb(e);
  }
};

export {
  onEscKeyPress,
}
