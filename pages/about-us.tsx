import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/common.module.scss'
import Novigation from '../components/Navigation/Novigation'


export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.container}>
   
        <div className={style.section}>
          <Novigation section='Про нас'/>
        <h2 className={style.section_title}>Про нас</h2>
      
        </div>
        </main>

    </div>
  )
}