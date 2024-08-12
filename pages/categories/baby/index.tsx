import Head from "next/head";
import { getBabyBalloons } from "../../../lib/balloons";
import BalloonsList from "../../../components/BalloonsList/BalloonsList";
import Balloon from "../../../Interface/interface";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";
import { GoogleTagManager } from "@next/third-parties/google";



export const getStaticProps = async () => {
  const response = await getBabyBalloons();
  return {
    props: { balloons: response },
    revalidate: 604800
   
  };
};

const ExtractFromMaternityHospital = ({ balloons }: {balloons: Balloon[]}) => {

  return (
    <>
      <Head>
        <title>Кульки на Виписку з пологового будинку</title>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку, для малюків, кульки на виписку, лелека, зустріч малюка, щасливий тато, сім'я, стати батьками"
        ></meta>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
        <GoogleTagManager gtmId="G-H2DLND3W5M"/>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132411369382672"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main className={common.container}>
        <Novigation section="Виписка з пологового будинку" />
        <h1 className={common.section_title}>Виписка з пологового будинку</h1>
        <BalloonsList balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default ExtractFromMaternityHospital;
