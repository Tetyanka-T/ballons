import Head from 'next/head'
import Header from '../components/Header/Header'
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
        <h2>Оплата і доставка</h2>
        </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}