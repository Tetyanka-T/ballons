import Head from "next/head";
import BalloonsListBirthDay from "../../../../components/BalloonsList/BalloonsListBirthDay";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";


export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDayHeBalloons = response.filter((bal: Balloon) => bal.grup === "Для нього");
  return {
    props: { balloons: birthDayHeBalloons },
    revalidate: 604800
  
  };
};
const BirthDayHe = ({ balloons }: {balloons: Balloon[]}) => {
 
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="кульки на день народження для нього, композиції із повітряних кульок, оформлення свята, доставка кульок Кривий Ріг, для чоловіка, коханому, ідея для подарунку, зв'язка кульок з гелієм, річниця, святковий настрій, трендові оформлення"
        ></meta>
        <title>День народження для нього</title>
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="Для нього"
          linkCategory="/categories/birthday/he"
        />
        <h1 className={common.section_title}>День народження для нього</h1>
        <BalloonsListBirthDay balloons={balloons}/>
      </main>
      <NoFindComposition />
    </>
  );
};

export default BirthDayHe;
