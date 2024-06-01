'use client'
import style from './desktop-menu.module.scss'
import { ReactElement } from 'react'
import Image from 'next/image'
import {
  LoginButton,
  LogoutButton,
  SignedIn,
  SignedOut,
} from '@kobbleio/next/client'

const DesktopMenu = (): ReactElement => {
  return (
    <div className={style['desktop-menu']}>
      <Image
        src="/assets/images/logo/header-logo.svg"
        width="74"
        height="44"
        alt="header logo"
      />
      <SignedIn>
        <div className={style.links}>
          <ul>
            <li className={style.selected}>Home</li>
            <li>My Squad</li>
            <li>Calendar</li>
            <li>Account</li>
          </ul>
          <LogoutButton>
            <button className="blue-outline">Se déconnecter</button>
          </LogoutButton>
        </div>
      </SignedIn>

      <SignedOut>
        <div className={style.links}>
          <ul>
            <li>Subscribe</li>
          </ul>
          <LoginButton>
            <button className="orange-outline">Se connecter</button>
          </LoginButton>
        </div>
      </SignedOut>
    </div>
  )
}

export default DesktopMenu
