import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import BalloonCard from '../../../../components/BalloonCard/BalloonCard'
import CategoriesListDesktop from '../../../../components/CategoriesListDesktop/CategoriesListDesktop'
import Filter from '../../../../components/Filter/Filter'
import NoFindComposition from '../../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../../components/Navigation/Novigation'
import common from '../../../../styles/common.module.scss'

const ExtractFromMaternityHospitalGirl = () => {
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
            <Novigation section='Виписка з пологового будинку' category='дівчинка' link='/categories/baby'/>
            <h1 className={common.section_title}>Виписка з пологового будинку для дівчинки</h1>
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

export default ExtractFromMaternityHospitalGirl;