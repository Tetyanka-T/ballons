import Head from "next/head";
import Novigation from "../components/Navigation/Novigation";
import OrderFormNew from "../components/OrderForm/OrderFormNew";

import common from "../styles/common.module.scss";

const OrderPage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={common.container}>
        <Novigation section="Оформлення замовлення" />

        <OrderFormNew />
      </main>
    </div>
  );
};

export default OrderPage;
