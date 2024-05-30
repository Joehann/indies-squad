'use client'

import {
  useAuth,
  SignedIn,
  SignedOut,
  LoginButton,
  LogoutButton,
} from '@kobbleio/next/client'

export default function Home() {
  const { user } = useAuth()

  return (
    <div
      style={{
        padding: '72px 12px 12px',
      }}
    >
      <SignedIn>
        <p>Welcome, {user?.name}</p>
        <LogoutButton>
          <button className="blue">Déconnexion</button>
        </LogoutButton>
      </SignedIn>
    </div>
  )
}
