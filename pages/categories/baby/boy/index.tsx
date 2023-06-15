import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'
import BalloonCard from '../../../../components/BalloonCard/BalloonCard'
import CategoriesListDesktop from '../../../../components/CategoriesListDesktop/CategoriesListDesktop'
import Filter from '../../../../components/FilterGender/FilterGender'
import NoFindComposition from '../../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../../components/Navigation/Novigation'
import common from '../../../../styles/common.module.scss'

const ExtractFromMaternityHospitalBoy = ({balloon}) => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/balloon.svg" />
        </Head>
  
        <main className={common.container}>
     
          <div className={common.section}>
            <CategoriesListDesktop/>
            <Novigation section='Виписка з пологового будинку' category='хлопчик' link='/categories/baby'/>
            <h1 className={common.section_title}>Виписка з пологового будинку для хлопчика</h1>
            <Filter/>
            <BalloonCard balloon={balloon}/>
          </div>
          
        </main>
        <NoFindComposition/>
  
      </div>
    )

}

export default ExtractFromMaternityHospitalBoy;