import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import s from './style/index.module.scss';
import { useRouter } from 'next/router';
import { Menu } from '../UI/Menu';
import { Anchor } from '../UI/Anchor';
import { Edges } from '../UI/Edges';


function SideNav() {
  const router = useRouter();
  const pathname = router?.pathname;
  return (
    <aside className={s.sideNav}>
      <nav>
        <Menu>
          <li>
            <Anchor
              href="/"
              id={s.sideNavLogo}
            >
              <Image
                src="/imgs/logo.png" alt="Logo Image"
                width="155px"
                height="47.5px"
              />
            </Anchor>
          </li>
          <li>
            <Anchor
              href="/"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
              }
              data-active={pathname === "/"}
            >
              الصفحة الرئيسية
            </Anchor>
          </li>
          <li>
            <Anchor
              href="/patients"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 24 24"
                ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" /></svg>
              }
              data-active={pathname === '/patients' || pathname === '/patients/groups'}
            >
              قائمة المرضي
            </Anchor>
          </li>
          <li>

            <Anchor
              href="/lab"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 24 24"
                ><g><rect fill="none" height="24" width="24" /></g><g><path d="M13,11.33L18,18H6l5-6.67V6h2 M15.96,4H8.04C7.62,4,7.39,4.48,7.65,4.81L9,6.5v4.17L3.2,18.4C2.71,19.06,3.18,20,4,20h16 c0.82,0,1.29-0.94,0.8-1.6L15,10.67V6.5l1.35-1.69C16.61,4.48,16.38,4,15.96,4L15.96,4z" /></g></svg>
              }
            >
              المعمل
            </Anchor>
          </li>
          <li>
            <Anchor
              href="/tasks"
            >
              <Edges
                right={
                  <div className={s.anchorName}>
                    <span className={s.anchorIconWrapper}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={s.anchorIcon}
                      >
                        <g>
                          <path d="M0,0h24v24H0V0z" fill="none" />
                        </g>
                        <g>
                          <path d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z" />
                        </g>
                      </svg>
                    </span>
                    <span
                      className={s.anchorText}
                    >
                      المهام
                    </span>
                  </div>
                }
                left={
                  <span
                    className={s.taskNum}
                    dir="ltr"
                  >
                    +9
                  </span>
                }
              />
            </Anchor>
          </li>
          <li>
            <Anchor
              href="/stock"
              data-active={pathname === '/stock'}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -5 24 24"
                ><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
              }
            >
              إدارة المخزن
            </Anchor>
          </li>
        </Menu>
      </nav>
    </aside>
  )
}

export default SideNav
