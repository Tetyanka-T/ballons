import Head from "next/head";
import Balloon from "../../../Interface/interface";
import BalloonsList from "../../../components/BalloonsList/BalloonsList";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { getGenderBalloons } from "../../../lib/balloons";
import common from "../../../styles/common.module.scss";
import { GoogleTagManager } from "@next/third-parties/google";



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
          content="кульки на визначення статті малюка, композиції із повітряних кульок, оформлення свята, доставка кульок Кривий Ріг, кульки, вечірка на визначення статі дитини, gender-party, хлопчик чи дівчинка, ідеї оформлення вечірки, майбутні батьки, гендер куля, вогнегасник, кольоровий дим, куля сюрприз, коробка з кульками, вагітність, емоції, в очікуванні дива, при надії, майбутня мама, вагітна фотосесія"
        ></meta>
        <title>Визначення статі малюка</title>
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
