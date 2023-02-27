import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import common from '../styles/common.module.scss'
import Novigation from '../components/Navigation/Novigation'



const FavoritePage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className={common.container}>
     
        <Header />
        <div className={common.section}>
          <Novigation section='Ваші улюблені композиції'/>
          <h1 className={common.section_title}>Ваші улюблені композиції</h1>
       </div>
      </main>

    
       
        <footer>
        <Footer/>
      </footer>
    </div>
  )
}





export default FavoritePage;