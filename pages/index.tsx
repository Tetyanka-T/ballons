import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CategoriesListDesktop from '../components/CategoriesListDesktop/CategoriesListDesktop'
import SliderBirthDayFirst from '../components/SliderBirthDayFirst/SliderBirthDayFirst'
import SliderBirthDayBoys from "../components/SliderBirthDayBoys/SliderBirthDayBoys"
import common from '../styles/common.module.scss'




export default function Home() {
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
        <CategoriesListDesktop />
        <h1>Ви довіряєте нам Ваші свята</h1>
        <SliderBirthDayFirst/>
        <SliderBirthDayBoys/>
        </div>
      </main>

    
       
        <footer>
        <Footer/>
      </footer>
    </div>
  )
}
