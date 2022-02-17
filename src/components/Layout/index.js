import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SideNav from '../SideNav';
import s from './style/index.module.scss'

function Layout({ children, title }) {
  return (
    <div className={s.layout}>
      <div className={s.sideNav}>
        <SideNav />
      </div>
      <div className={s.container}>
        <div className={s.header}>
          <Header title={title} />
        </div>
        <div className={s.pageWrapper}>
          <div className={s.content}>
            {
              children
            }
          </div>
          <div className={s.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
