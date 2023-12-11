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
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, ідеї подарунку, день народження, дитячий день народження, для дорослих, фотозони, фасади, незабутні емоції, кульки з гелієм, зв'язки, вечірки, річниця, фотосесії, щаслива родина, подарунки"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={common.container}>
        <SliderHomePage />
        <CollageHomePage />
      </main>
    </div>
  );
}
