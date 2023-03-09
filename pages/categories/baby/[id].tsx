import Head from 'next/head'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import common from '../../../styles/common.module.scss'
import CategoriesListDesktop from '../../../components/CategoriesListDesktop/CategoriesListDesktop'
import Novigation from '../../../components/Navigation/Novigation'
import CardDescription from "../../../components/CardDescription/CardDescription";

const CardId = () => {
    return (
        <>
         <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="../balloon.svg" />
        </Head>
        <main className={common.container}>
        <Header />
        <div className={common.section}>
        <CategoriesListDesktop/>
            <Novigation section='Виписка з пологового будинку' category='Композиція'/>
        <CardDescription/>
        </div>
        </main>
        <footer>
          <Footer/>
        </footer>
        </>
    )
}

export default CardId;