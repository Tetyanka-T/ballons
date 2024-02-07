import Head from "next/head";
import BalloonsListBirthDay from "../../../../components/BalloonsList/BalloonsListBirthDay";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";



export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDayBalloonsGirls = response.filter(
    (bal: Balloon) => bal.grup === "Для дівчинки"
  );
  return {
    props: { balloons: birthDayBalloonsGirls },
    revalidate: 604800
  };
};

const BirthDayGirls = ({ balloons }: {balloons: Balloon[]}) => {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свят, доставка, Кривий Ріг, день народження, зв'язка для дівчинки, кольорова гама, річниця, індивідуальний напис, кульки з гелієм, трендові оформлення, незабутні враження"
        ></meta>
        <title>Кульки на День народження для дівчинки</title>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="Для дівчинки"
          linkCategory="/categories/birthday/girls"
        />
        <h1 className={common.section_title}>День народження для дівчинки</h1>
        <BalloonsListBirthDay balloons={balloons}/>
      </main>
      <NoFindComposition />
    </div>
  );
};

export default BirthDayGirls;
