import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import common from '../../../styles/common.module.scss'
import BalloonCard from '../../../components/BalloonCard/BalloonCard'
import s from '../../../styles/Categories.module.scss'
import { Home, NextPage } from '../../../components/svg'
import CategoriesListDesktop from '../../../components/CategoriesListDesktop/CategoriesListDesktop'
import Filter from '../../../components/Filter/Filter'
import NoFindComposition from '../../../components/NoFindComposition/NoFindComposition'

const ExtractFromMaternityHospital = () => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/balloon.svg" />
        </Head>
  
        <main className={common.container}>
          <Header />
          <div className={common.section}>
           
          <CategoriesListDesktop/>
            <ul className={s.categories_list}>
              <li>
                <Home/>
              </li>
              <li>
                <NextPage/>
              </li>
              <li>
              Виписка з пологового будинку
              </li>
            </ul>
            <h1 className={common.section_title}>Виписка з пологового будинку</h1>
            <Filter/>
            <BalloonCard/>
          </div>

          
        </main>
        <NoFindComposition/>
        <footer>
          <Footer/>
        </footer>
      </div>
    )
}


export default ExtractFromMaternityHospital;