import Head from "next/head";
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
        <title>Магазин композицій з повітряних кульок</title>
      </Head>

      <main className={common.container}>
        <SliderHomePage />
        <CollageHomePage />
      </main>
    </>
  );
}
