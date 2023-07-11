import Head from "next/head";

import CategoriesListDesktop from "../components/CategoriesListDesktop/CategoriesListDesktop";
import CollageHomePage from "../components/CollageHomePage/CollageHomePage";
import SliderHomePage from "../components/SliderHomePage/SliderHomePage";
import common from "../styles/common.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="keywords"
          content="Інтернет-магазин композицій із повітряних кульок, оформлення свят, Кривий Ріг"
        ></meta>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <SliderHomePage />
        <CollageHomePage />
      </main>
    </div>
  );
}
