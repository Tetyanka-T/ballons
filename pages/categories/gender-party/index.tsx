import Head from "next/head";
import Balloon from "../../../Interface/interface";
import BalloonsList from "../../../components/BalloonsList/BalloonsList";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { getGenderBalloons } from "../../../lib/balloons";
import common from "../../../styles/common.module.scss";



export const getStaticProps = async () => {
  const response = await getGenderBalloons();
  return {
    props: { balloons: response },
    revalidate: 604800
  };
};

const GenderParty = ({ balloons }: {balloons: Balloon[]}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка, Кривий Ріг, кульки, вечірка на визначення статі дитини, gender-party, хлопчик чи дівчинка, ідеї оформлення вечірки, майбутні батьки, гендер куля, вогнегасник, кольоровий дим, куля сюрприз, коробка з кульками, вагітність, емоції, в очікуванні дива, при надії, майбутня мама, вагітна фотосесія"
        ></meta>
        <title>Визначення статі малюка</title>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132411369382672"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <main className={common.container}>
        <Novigation section="Визначення статі малюка" />
        <h1 className={common.section_title}>Визначення статі малюка</h1>
        <BalloonsList balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default GenderParty;
