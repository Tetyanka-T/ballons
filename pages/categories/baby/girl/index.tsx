import Head from "next/head";
import { getBabyBalloons } from "../../../../lib/balloons";
import Balloon from "../../../../Interface/interface";
import BalloonsList from "../../../../components/BalloonsList/BalloonsList";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";



export const getStaticProps = async () => {
  const response = await getBabyBalloons();
  const babyBalloonsGirls = response.filter(
    (bal: Balloon) => bal.grup === "Для дівчинки"
  );
  return {
    props: { balloons: babyBalloonsGirls },
    revalidate: 604800

  };
};

const ExtractFromMaternityHospitalGirl = ({ balloons }: {balloons: Balloon[]}) => {
 
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції з повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку для дівчинки, для малюка, привіт малюк, чим порадувати молоду маму, прикрасити квартиру, кульки на виписку"
        ></meta>
        <title>Виписка з пологового будинку для дівчинки</title>
      </Head>

      <main className={common.container}>
        <Novigation
          section="Виписка з пологового будинку"
          category="дівчинка"
          linkSection="/categories/baby"
        />
        <h1 className={common.section_title}>
          Виписка з пологового будинку для дівчинки
        </h1>
        <BalloonsList balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default ExtractFromMaternityHospitalGirl;
