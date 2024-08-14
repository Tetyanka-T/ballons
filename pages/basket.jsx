import Head from "next/head";
import Basket from "../components/Basket/Basket";
import common from "../styles/common.module.scss";

const BasketPage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <link rel="icon" href="/basket.svg" />
      </Head>

      <main className={common.container}>
        <Basket />
      </main>
    </div>
  );
};

export default BasketPage;
