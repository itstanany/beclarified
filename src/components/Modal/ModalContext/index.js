import { createContext } from 'react';

const defaultValue = {
  show: false,
  title: null,
  onClose: () => ({}),
  children: [],
};

const ModalContext = createContext(defaultValue);

export {
  ModalContext,
}
