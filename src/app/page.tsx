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

  console.log(user)

  return (
    <div>
      <SignedIn>
        <p>Welcome, {user?.name}</p>
        <LogoutButton>
          <button className="blue">Déconnexion</button>
        </LogoutButton>
      </SignedIn>

      <SignedOut>
        <p>Not authenticated</p>
        <LoginButton>
          <button>Connexion</button>
        </LoginButton>
      </SignedOut>
    </div>
  )
}
