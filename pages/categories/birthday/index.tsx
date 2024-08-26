import Head from "next/head";
import { getBirthDayBalloons } from "../../../lib/balloons";
import BalloonsListBirthDay from "../../../components/BalloonsList/BalloonsListBirthDay";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";
import Balloon from "../../../Interface/interface";

export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();

  return {
    props: { balloons: response },
    revalidate: 604800
   
  };
};

const BirthDays = ({ balloons }: {balloons: Balloon[]}) => {
  
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="кульки на день народження, композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, день народження, ідеї подарунка для іменинника, сюрприз, нюдові кульки, трендові оформлення, святковий настрій, індивідуальний напис, кольорова гама, кульки з гелієм, річниця"
        ></meta>
        <title>День народження</title>
      </Head>

      <main className={common.container}>
        <Novigation section="День народження" />
        <h1 className={common.section_title}>День народження</h1>
        <BalloonsListBirthDay balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default BirthDays;
