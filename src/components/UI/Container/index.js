import React from 'react';
import s from './style/index.module.scss'

function Container({ children }) {
  return (
    <div className={s.container}>
      {
        children
      }
    </div>
  )
}

export default Container
