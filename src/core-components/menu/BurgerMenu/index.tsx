'use client'
import style from './burger-menu.module.scss'
import { ReactElement } from 'react'
import Image from 'next/image'
import { LoginButton, SignedIn, SignedOut } from '@kobbleio/next/client'

const BurgerMenu = (): ReactElement => {
  return (
    <div className={style['burger-menu']}>
      <Image
        src="/assets/images/logo/header-logo.svg"
        width="63"
        height="38"
        alt="header logo"
      />
      <SignedIn>
        <div className={style['burger-button']} onClick={() => null}>
          <div className={style.line} />
          <div className={style.line} />
          <div className={style.line} />
        </div>
      </SignedIn>

      <SignedOut>
        <LoginButton>
          <button className={style['login-button']}>
            <Image
              src="/assets/images/svg/login.svg"
              width="20"
              height="20"
              alt="login svg"
            />
          </button>
        </LoginButton>
      </SignedOut>
    </div>
  )
}

export default BurgerMenu
