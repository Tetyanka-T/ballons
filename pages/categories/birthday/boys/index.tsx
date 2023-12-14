import Head from "next/head";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import BalloonsListBirthDay from "../../../../components/BalloonsList/BalloonsListBirthDay";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import Balloon from "../../../../Interface/interface";
import common from "../../../../styles/common.module.scss";

export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDayBalloonsBoy = response.filter(
    (bal: Balloon) => bal.grup === "Для хлопчика"
  );
  return {
    props: { balloons: birthDayBalloonsBoy },
    revalidate: 604800
  };
};

const BirthDayBoy = ({ balloons }: {balloons: Balloon[]}) => {

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, кульки, оформлення свята, доставка, Кривий Ріг, день народження, ідеї подарунка для іменинника, сюрприз, нюдові кульки, трендові оформлення, святковий настрій, індивідуальний напис, кольорова гама, кульки з гелієм, річниця"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="Для хлопчика"
          linkCategory="/categories/birthday/boys"
        />
        <h1 className={common.section_title}>День народження для хлопчика</h1>
        <BalloonsListBirthDay balloons={balloons}/>
      </main>
      <NoFindComposition />
    </div>
  );
};

export default BirthDayBoy;
