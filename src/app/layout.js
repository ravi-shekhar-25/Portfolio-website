import './globals.css'
import {Inter} from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio | Ravi Shekhar',
  description: 'A detailed portfolio website showcasing all my skills and works.',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico" />
      </Head>
        <body className={inter.className}>{children}</body>
      </html>
  )
}
