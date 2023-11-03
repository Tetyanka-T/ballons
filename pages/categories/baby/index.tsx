import Head from "next/head";
import { getBabyBalloons } from "../../../lib/balloons";
import BalloonsList from "../../../components/BalloonsList/BalloonsList";
import Balloon from "../../../Interface/interface";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";



export const getStaticProps = async () => {
  const response = await getBabyBalloons();
  return {
    props: { balloons: response },
    revalidate: 3600
   
  };
};

const ExtractFromMaternityHospital = ({ balloons }: {balloons: Balloon[]}) => {

  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку, для малюків, кульки на виписку, лелека, зустріч малюка, щасливий тато, сім'я, стати батьками"
        ></meta>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <Novigation section="Виписка з пологового будинку" />
        <h1 className={common.section_title}>Виписка з пологового будинку</h1>
        <BalloonsList balloons={balloons}/>
      </main>
      <NoFindComposition />
    </div>
  );
};

export default ExtractFromMaternityHospital;
