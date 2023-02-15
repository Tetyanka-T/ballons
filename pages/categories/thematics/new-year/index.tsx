import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import common from '../../../../styles/common.module.scss'
import BalloonCard from '../../../../components/BalloonCard/BalloonCard'
import CategoriesListDesktop from '../../../../components/CategoriesListDesktop/CategoriesListDesktop'
import Filter from '../../../../components/Filter/Filter'
import NoFindComposition from '../../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../../components/Navigation/Novigation'

const NewYear = () => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/balloon.svg"/>
        </Head>
  
        <main className={common.container}>
          <Header />
          <div className={common.section}>
          <CategoriesListDesktop/>
            <Novigation section='Тематична свята' category='Новий Рік' link='/categories/thematics'/>
            <h1 className={common.section_title}>Новий Рік</h1>
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


export default NewYear;