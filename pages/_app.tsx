import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app'
import { CartProvider } from '../context/CartContext'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CategoriesListDesktop from '../components/CategoriesListDesktop/CategoriesListDesktop'
import '../styles/globals.css'
import common from "../styles/common.module.scss"


const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})


const App = ({ Component, pageProps }: AppProps) => {
 
  return (
  <>
    <Head>
      <meta
        name="description"
        content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
      />
      <link rel="icon" href="/logo.png" />
      <meta name="google-site-verification" content="t_nqhlCazeK-duvSqjQNde6GPVCudSloO07f2uEiBrE" />
      
      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132411369382672"
          crossOrigin="anonymous"
      ></script>
        
    </Head>
    <GoogleAnalytics gaId="G-H2DLND3W5M" />
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
  </>
   
  )
}
export default App;