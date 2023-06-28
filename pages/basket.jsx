import Head from 'next/head'
import Basket from '../components/Basket/Basket'
import common from '../styles/common.module.scss'
import s from '../styles/BasketPage.module.scss'
import {Cross} from '../components/svg'


const BasketPage = () => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/basket.svg" />
        </Head>
  
        <main className={common.container}>
          <Basket/>
        </main>
      </div>
    )
}

export default BasketPage;