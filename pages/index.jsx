import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

import CollageHomePage from "../components/CollageHomePage/CollageHomePage";
import SliderHomePage from "../components/SliderHomePage/SliderHomePage";
import common from "../styles/common.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, ідеї подарунку, день народження, дитячий день народження, для дорослих, фотозони, фасади, незабутні емоції, кульки з гелієм, зв'язки, вечірки, річниця, фотосесії, щаслива родина, подарунки"
        ></meta>
        <title>Весела витівка композиції з повітряних кульок</title>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
        <GoogleTagManager gtmId="G-GQGMTW2BMV" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132411369382672"
          crossorigin="anonymous"
        ></script>
      </Head>

      <main className={common.container}>
        <SliderHomePage />
        <CollageHomePage />
      </main>
    </>
  );
}
