import Head from "next/head";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import BalloonsListBirthDay from "../../../../components/BalloonsList/BalloonsListBirthDay";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";


export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDaySheBalloons = response.filter((bal: Balloon) => bal.grup === "Для неї");
  return {
    props: { balloons: birthDaySheBalloons },
    revalidate: 604800
  };
};

const BirthDayShe = ({ balloons }: {balloons: Balloon[]}) => {
 
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="кульки на день народження для неї, композиції із повітряних кульок, оформлення свята, доставка кульок Кривий Ріг, для жінки, для дівчини, для коханої, ідея для подарунку, трендові оформлення, незабутні враження, кульки з гелієм, річниця, чим порадувати іменинника"
        ></meta>
        <title>День народження для неї</title>
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="Для неї"
          linkCategory="/categories/birthday/she"
        />
        <h1 className={common.section_title}>День народження для неї</h1>
        <BalloonsListBirthDay balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default BirthDayShe;
