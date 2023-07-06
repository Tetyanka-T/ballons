import '../styles/globals.css'
import common from '../styles/common.module.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CategoriesListDesktop from '../components/CategoriesListDesktop/CategoriesListDesktop'
import { CartProvider } from '../context/CartContext'

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    }
  }})

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // set scroll restoration to manual
  useEffect(() => {
    if ('scrollRestoration' in history && history.scrollRestoration !== 'manual') {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // handle and store scroll position
  useEffect(() => {
    const handleRouteChange = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  // restore scroll position
  useEffect(() => {
    if ('scrollPosition' in sessionStorage) {
      window.scrollTo(0, Number(sessionStorage.getItem('scrollPosition')));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);
  return (
<div className={inter.className}>
  <CartProvider>
  <ThemeProvider theme={theme}>
  <Header/>
  <div className={common.container}>
     
      
     <div className={common.section}>
     <CategoriesListDesktop />
     </div>
     </div>
 <Component {...pageProps} />
 <Footer/>
  </ThemeProvider>
  
  </CartProvider>
 
  </div>
  )
}
export default App;