import Head from "next/head";
import Balloon from "../../../Interface/interface";
import { getFasadBalloons } from "../../../lib/balloons";
import BalloonsListWithConsultation from "../../../components/BalloonsList/BalloonsListWithConsultation";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";


export const getStaticProps = async () => {
  const response = await getFasadBalloons();

  return {
    props: { balloons: response },
    revalidate: 604800
  };
};

const Design = ({ balloons }: {balloons: Balloon[]}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="оформлення фасадів кульками, композиції із повітряних кульок, оформлення свята, доставка кульок Кривий Ріг, прикрашання фасаду магазинів, кафе, декорація, на відкриття магазину, гірлянда, арка з кульок, каркас"
        ></meta>
        <title>Оформлення фасадів</title>
      </Head>

      <main className={common.container}>
        <Novigation section="Оформлення фасадів" />
        <h1 className={common.section_title}>Оформлення фасадів</h1>
        <BalloonsListWithConsultation balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default Design;
