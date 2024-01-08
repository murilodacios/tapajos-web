import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tapajós Carbon',
  description: 'A primeira ecofintech do Brasil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ewk1yik.css" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>

      </body>
    </html>
  )
}
