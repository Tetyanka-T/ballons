import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CategoriesListDesktop from '../components/CategoriesListDesktop/CategoriesListDesktop'
import common from '../styles/common.module.scss'
import s from '../styles/Home.module.scss'
import BalloonCard from '../components/BalloonCard/BalloonCard'
import CardDescription from '../components/CardDescription/CardDescription'
import OrderForm from '../components/OrderForm/OrderForm'


export default function Home() {
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
        <CategoriesListDesktop />
        {/* <div className={s.logo_container}>
        <p className={s.logo_vutivaku}>Vutivaku</p>
        <p className={s.logo_city}>Кривий Ріг</p>
        </div> */}
        {/* <BalloonCard/> */}
        </div>
        {/* <CardDescription/> */}
      </main>

    
       
        <footer>
        <Footer/>
      </footer>
    </div>
  )
}
