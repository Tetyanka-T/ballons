import '../styles/globals.css'
import common from "../styles/common.module.scss"

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CategoriesListDesktop from '../components/CategoriesListDesktop/CategoriesListDesktop'
import { CartProvider } from '../context/CartContext'


const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})


const App = ({ Component, pageProps }: AppProps) => {
 
  return (

 <div className={inter.className} lang='uk'>
       <CartProvider>
          <Header/>
          <div className={common.container}>
            <div className={common.section}>
              <CategoriesListDesktop />
            </div>
          </div> 
          <Component {...pageProps} />
          <Footer/>
      </CartProvider>
    </div>
  )
}
export default App;