import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import common from '../../../styles/common.module.scss'
import BalloonCard from '../../../components/BalloonCard/BalloonCard'
import CategoriesListDesktop from '../../../components/CategoriesListDesktop/CategoriesListDesktop'
import Filter from '../../../components/Filter/Filter'
import NoFindComposition from '../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../components/Navigation/Novigation'
const PhotoZone = () => {
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
            <Novigation section='Фотозони'/>
            <h1 className={common.section_title}>Фотозони</h1>
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

export default PhotoZone;