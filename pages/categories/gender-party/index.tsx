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
  };
};

const GenderParty = ({ balloons }: {balloons: Balloon[]}) => {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, Кривий Ріг, вечірка на визначення статті дитини, gender-party, хлопчик чи дівчинка, ідеї оформлення вечірки, майбутні батьки, гендер куля, вогнегасник, кольоровий дим, куля сюрприз, коробка з кульками, вагітність, емоції, в очікуванні дива, при надії, майбутня мама, вагітна фотосесія"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>
      <main className={common.container}>
        <Novigation section="Визначення статті малюка" />
        <h1 className={common.section_title}>Визначення статті малюка</h1>
        <BalloonsList balloons={balloons}/>
      </main>
      <NoFindComposition />
    </div>
  );
};

export default GenderParty;
