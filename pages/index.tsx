import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CategoriesList from '../components/CategoriesList/CategoriesList'
import s from '../styles/Home.module.scss'
import common from '../styles/common.module.scss'
import Container from '../components/Container/Container'
import BalloonCard from '../components/BalloonCard/BalloonCard'
import CardDescription from '../components/CardDescription/CardDescription'

import NavBar from '../components/NavBar/NavBar'

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
        <CategoriesList />
        {/* <NavBar/> */}
        <BalloonCard/>
        {/* <CardDescription/> */}
      </main>

    
       
        <footer>
        <Footer/>
      </footer>
    </div>
  )
}
