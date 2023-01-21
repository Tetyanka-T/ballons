import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Home.module.css'

export default function PaymentPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Весела витівка</title>
        <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <h2>Оплата і доставка</h2>
        </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}