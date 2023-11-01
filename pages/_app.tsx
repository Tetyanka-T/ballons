import '../styles/globals.css'
import common from "../styles/common.module.scss"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
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
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    }
  }})

const App = ({ Component, pageProps }: AppProps) => {
 
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