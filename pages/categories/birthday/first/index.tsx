import Head from "next/head";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import BalloonsListFirstBD from "../../../../components/BalloonsList/BalloonsListFirstBD";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";
import { GoogleTagManager } from "@next/third-parties/google";



export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDayFirstBalloons = response.filter(
    (bal: Balloon) => bal.grup === "Перший день народження"
  );
  return {
    props: { balloons: birthDayFirstBalloons },
    revalidate: 604800

  };
};

const FirstBirthDay = ({ balloons }: {balloons: Balloon[]}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="кульки на перший день народження, композиції із повітряних кульок, оформлення свята, доставка кульок Кривий Ріг, для хлопчика, для дівчинки, кульки з гелієм, річниця, індивідуальний напис"
        ></meta>
        <title>Перший День народження</title>
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="1-й День народження"
          linkCategory="/categories/birthday/first"
        />
        <h1 className={common.section_title}>Перший День народження</h1>
        <BalloonsListFirstBD balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default FirstBirthDay;
