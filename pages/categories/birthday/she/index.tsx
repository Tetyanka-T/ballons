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
  };
};

const BirthDayShe = ({ balloons }: {balloons: Balloon[]}) => {
 
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, день народження, для жінки, для дівчини, для неї, для коханої, ідея для подарунку, трендові оформлення, незабутні враження, кульки з гелієм, річниця, чим порадувати іменинника"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
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
    </div>
  );
};

export default BirthDayShe;
