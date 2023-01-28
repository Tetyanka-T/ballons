import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import common from '../styles/common.module.scss'
import s from '../styles/Basket.module.scss'
import { Cansel, Cross } from '../components/svg'

const BasketPage = () => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/basket.svg" />
        </Head>
  
        <main className={common.container}>
          <Header />
          <div className={common.section}>
          <h1 className={common.section_title}>Кошик</h1>
          <div className={s.basketPage}>
            <Image src='/photo_1.jpg' alt="" width={80} height={80}/>
            <div className={s.basketPage__cont}>
            <h3>Супер пупер композиція</h3>
            <p>арт.№ 1236</p>
            <div className={s.basket_couter}>
              <ul className={s.basket_couter__list}>
                <li className={s.basket_couter__list__item}>
                  <button className={s.basket_couter__list__item_button}>-</button>
                </li>
                <li className={s.basket_couter__list__item}>
                  <p>1</p>
                </li>
                <li className={s.basket_couter__list__item}>
                  <button className={s.basket_couter__list__item_button}>+</button>
                </li>
                <li className={s.basket_couter__list__item}>
                  <button className={s.basket_couter__list__item_button_cross}>
                    <Cross className={s.basket_couter__list__item_button__icon}/>
                  </button>
                </li>
              </ul>
              <p className={s.basket__price}>2000грн.</p>
            </div>
            </div>
          </div>
          <div className={s.basket_sum}>
            <p>Разом:</p>
            <p>2000 грн.</p>
          </div>

          <div className={s.basket_order_container}>
            <button className={s.basket_order_continu}>Продовжити покупки</button>
            <button className={s.basket_order_button}>Оформити замовлення</button>
          </div>
          

          {/* <div className={s.basketPage}>
            <Image src='/photo_1.jpg' alt="" width={80} height={80}/>
            <div className={s.basketPage__cont}>
            <h3>Супер пупер композиція</h3>
            <p>арт.№ 1236</p>
            <div className={s.basket_couter}>
              <ul className={s.basket_couter__list}>
                <li className={s.basket_couter__list__item}>
                  <button className={s.basket_couter__list__item_button}>-</button>
                </li>
                <li className={s.basket_couter__list__item}>
                  <p>1</p>
                </li>
                <li className={s.basket_couter__list__item}>
                  <button className={s.basket_couter__list__item_button}>+</button>
                </li>
                <li className={s.basket_couter__list__item}>
                  <button className={s.basket_couter__list__item_button_cross}>
                    <Cross className={s.basket_couter__list__item_button__icon}/>
                  </button>
                </li>
              </ul>
              <p className={s.basket__price}>2000грн.</p>
            </div>
            </div>
          </div> */}
          </div>
          
        </main>
  
        <footer>
          <Footer/>
        </footer>
      </div>
    )
}

export default BasketPage;