import Head from "next/head";
import Novigation from "../components/Navigation/Novigation";
import OrderFormNew from "../components/OrderForm/OrderFormNew";
import common from "../styles/common.module.scss";

const OrderPage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
      </Head>

      <main className={common.container}>
        <Novigation section="Оформлення замовлення" />

        <OrderFormNew />
      </main>
    </div>
  );
};

export default OrderPage;
