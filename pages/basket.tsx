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
       
            <div className={s.counter_close}>
              <h1 className={s.title}>Кошик</h1>
              <button className={s.basket_close}>
                <Cross />
              </button>
            </div>
         
          <Basket/>
         
         
          <div className={s.basket_sum}>
            <p>Разом:</p>
            <p>4000 грн</p>
          </div>

          <div className={s.basket_order_container}>
            <button className={s.basket_order_continu}>Продовжити покупки</button>
            <button className={s.basket_order_button}>Оформити замовлення</button>
          </div>
          

      

          
        </main>
  
     
      </div>
    )
}

export default BasketPage;