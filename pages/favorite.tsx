import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Home, NextPage, Location, Call, Leter } from '../components/svg'
import common from '../styles/common.module.scss'
import style from '../styles/Categories.module.scss'



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
            <ul className={style.categories_list}>
              <li>
                <Home/>
              </li>
              <li>
                <NextPage/>
              </li>
              <li>
              Вподобайки
              </li>
            </ul>
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