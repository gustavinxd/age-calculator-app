import './globals.css'
import { Inter } from 'next/font/google'
//import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Age Calculator App',
  description: 'Calculate your age!',
}

export default function RootLayout( {children,}: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
