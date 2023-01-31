import '../styles/globals.css'
import '../styles/common.module.scss'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
// Lora
const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
<main className={inter.className}>
 <Component {...pageProps} />
  </main>
  )
  
 
}
