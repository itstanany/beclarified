import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './style/index.module.scss';

function AuthNavItem() {

  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleShowNavMenu = useCallback(() => setShowNavMenu((prevState) => !prevState), []);


  return (
    <nav className={s.authNav} onClick={toggleShowNavMenu}>
      <figure className={s.authFigure}>
        <div className={s.imgCropper}>
          <Image
            width="40px"
            height="40px"
            src="/imgs/profile.jpg"
            alt="Profile"
          />
        </div>
        <figcaption>
          <p className={s.name}>
            Eman Amr
          </p>
          <p className={s.title}>
            سكرتيرة
          </p>
        </figcaption>
      </figure>
      {
        showNavMenu
          ? <ul className={s.navMenu} id="authMenu">
            <li>
              <Link href="#">
                <a>
                  الاعدادت
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  الملف الشخصي
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  تسجيل الخروج
                </a>
              </Link>
            </li>
          </ul>
          : null
      }
    </nav>
  )
}

export default AuthNavItem
