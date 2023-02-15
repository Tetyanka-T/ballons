import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import Novigation from "../components/Navigation/Novigation";
import OrderForm from "../components/OrderForm/OrderForm";
import Footer from "../components/Footer/Footer";
import common from "../styles/common.module.scss";
import ss from "../styles/OrderPage.module.scss";



const OrderPage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <Header />
        <div className={common.section}>
          <Novigation section="Оформлення замовлення"/>
       
          <h1 className={common.section_title}>Оформлення замовлення</h1>
          <OrderForm/>
          <h2 className={ss.order}>Ваше замовлення</h2>
          <ul className={ss.basket_list}>
          <li className={ss.basket_list__item}>
          <div className={ss.basket_photo}>
            <Image src="/photo_1.jpg" alt="" width={70} height={90} />
          </div>

          <div className={ss.basket_list__item__product}>
            <h3 className={ss.basket_list__item__product__title}>
              Супер пупер композиція
            </h3>
            <p className={ss.basket_list__item__product__art}>арт.№ 1236</p>
            <p className={ss.basket__price}>Ціна: 2000 грн</p>
          </div>
          </li>
          <li className={ss.basket_list__item}>
          <div className={ss.basket_photo}>
            <Image src="/photo_1.jpg" alt="" width={70} height={90} />
          </div>

          <div className={ss.basket_list__item__product}>
            <h3 className={ss.basket_list__item__product__title}>
              Супер пупер композиція
            </h3>
            <p className={ss.basket_list__item__product__art}>арт.№ 1236</p>
            <p className={ss.basket__price}>Ціна: 2000 грн</p>
          </div>
          </li>
          </ul>
        
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OrderPage;
