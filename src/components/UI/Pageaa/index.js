import React from 'react'

function Page({
  children
}) {
  return (
    <div className={s.page}>
      {
        children
      }
    </div>
  )
}

export default Page
