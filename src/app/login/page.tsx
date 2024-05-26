'use client'
import InputWithLabel from 'indies-squad/core-components/inputs/InputTextWithLabel'
import { ReactElement, useState } from 'react'
import style from './login.module.scss'
import Image from 'next/image'
import { SignedOut } from '@kobbleio/next/client'

const LoginPage = (): ReactElement => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    checkPassword: '',
  })

  const handleChange = (key: string) => (value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className={style.login}>
      <h1>Inscris-toi</h1>
      <div className={style.form}>
        <InputWithLabel
          id="email"
          label="Email"
          value={form.email}
          onChange={handleChange('email')}
        />
        <InputWithLabel
          id="password"
          type="password"
          label="Mot de passe"
          value={form.password}
          onChange={handleChange('password')}
        />
        <InputWithLabel
          id="check-password"
          type="password"
          label="Confirmation"
          value={form.checkPassword}
          onChange={handleChange('checkPassword')}
        />
      </div>

      <button className="orange">C&apos;est parti !</button>

      <div className={style.divider} />

      <div className={style.providers}>
        <SignedOut>
          <button className={style.provider}>
            <Image
              src="/assets/images/svg/gmail.svg"
              alt="gmail icon"
              width="48"
              height="36"
            />
          </button>
        </SignedOut>
        <SignedOut>
          <button className={style.provider}>
            <Image
              src="/assets/images/svg/github.svg"
              alt="gmail icon"
              width="48"
              height="48"
            />
          </button>
        </SignedOut>
      </div>
    </div>
  )
}

export default LoginPage
