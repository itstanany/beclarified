import React, { useCallback, useState } from 'react'
import Link from 'next/link';
import s from './style/index.module.scss';

function Footer() {
  return (
    <>
      <footer dir="ltr" className={s.footer}>
        Made with
        &nbsp;
        <span className={s.love}>
          ♥
        </span>
        &nbsp;
        by
        &nbsp;
        <Link
          href="/team"
        >
          <a>
            Dentists
          </a>
        </Link>
        &nbsp;
        for
        &nbsp;
        <Link
          href="/clients"
        >
          <a>
            Dentists
          </a>
        </Link>
        &nbsp;
        @
        &nbsp;
        <address>
          <a
            href="https://goo.gl/maps/ifR2ddFdd5XBwkYCA"
            target="_blank"
            rel="noreferrer"
          >
            Egypt
          </a>
        </address>
      </footer>
    </>
  )
}

export default Footer
