import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { KobbleProvider } from '@kobbleio/next/server'
import '../styles/reset.css'
import '../styles/_main.scss'
import BurgerMenu from 'indies-squad/core-components/menu/BurgerMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indies Squad',
  description:
    'Indies Squad offers developers who want to take their side projects to the next level the opportunity to join an accountibility group.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <KobbleProvider>
          <BurgerMenu />
          {children}
        </KobbleProvider>
      </body>
    </html>
  )
}
