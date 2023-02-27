import Head from 'next/head'
import Header from '../components/Header/Header'
import Novigation from '../components/Navigation/Novigation'
import Footer from '../components/Footer/Footer'
import common from '../styles/common.module.scss'

export default function PaymentPage() {
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
        <Novigation section='Оплата і доставка'/>
        <h2 className={common.section_title}>Оплата і доставка</h2>
        </div>
        </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}