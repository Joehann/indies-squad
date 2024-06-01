import type { Metadata } from 'next'
import { KobbleProvider } from '@kobbleio/next/server'
import '../styles/reset.css'
import '../styles/_main.scss'
import Menu from 'indies-squad/core/components/menu/Menu'

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
          {/* <Menu /> */}
          {children}
        </KobbleProvider>
      </body>
    </html>
  )
}
