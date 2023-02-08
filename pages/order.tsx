import Head from "next/head";
import Header from "../components/Header/Header";
import OrderForm from "../components/OrderForm/OrderForm";
import Footer from "../components/Footer/Footer";
import common from "../styles/common.module.scss";
import s from "../styles/Categories.module.scss";
import { Home, NextPage } from "../components/svg";

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
          <ul className={s.categories_list}>
            <li>
              <Home />
            </li>
            <li>
              <NextPage />
            </li>
            <li>Оформлення замовлення</li>
          </ul>
          <h1 className={common.section_title}>Оформлення замовлення</h1>
          <OrderForm/>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default OrderPage;
