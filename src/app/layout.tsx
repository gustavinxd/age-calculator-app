import './globals.css'
import { poppins } from '@/utils/fonts'

export const metadata = {
  title: 'Age Calculator App',
  description: 'Calculate your age!',
}

export default function RootLayout( {children,}: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
