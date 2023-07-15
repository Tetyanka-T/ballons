import Head from "next/head";

import CategoriesListDesktop from "../components/CategoriesListDesktop/CategoriesListDesktop";
import CollageHomePage from "../components/CollageHomePage/CollageHomePage";
import SliderHomePage from "../components/SliderHomePage/SliderHomePage";
import common from "../styles/common.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свят, Кривий Ріг, ідеї подарунку, день народження, дитячий день народження, для дорослих"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій із повітряних кульок, оформлення свят, Кривий Ріг,"
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
