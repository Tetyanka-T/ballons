import Head from "next/head";
import { getBabyBalloons } from "../../../../lib/balloons";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";
import Balloon from "../../../../Interface/interface";
import BalloonsList from "../../../../components/BalloonsList/BalloonsList";

export const getStaticProps = async () => {
  const response = await getBabyBalloons();
  const babyBalloonsBoys = response.filter(
    (bal: Balloon) => bal.grup === "Для хлопчика"
  );
  return {
    props: { balloons: babyBalloonsBoys },

  };
};

const ExtractFromMaternityHospitalBoy = ({ balloons }: {balloons: Balloon[]}) => {

  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку, для хлопчика, малюка, привіт малюк, ідеї подарунку для молодих батьків, кульки на виписку, лелека, зустріч малюка"
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
          section="Виписка з пологового будинку"
          category="хлопчик"
          linkSection="/categories/baby"
        />
        <h1 className={common.section_title}>
          Виписка з пологового будинку для хлопчика
        </h1>
       <BalloonsList balloons={balloons}/>
      </main>
      <NoFindComposition />
    </div>
  );
};

export default ExtractFromMaternityHospitalBoy;
