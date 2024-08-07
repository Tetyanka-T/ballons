import Head from "next/head";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import BalloonsListFirstBD from "../../../../components/BalloonsList/BalloonsListFirstBD";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";



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
          content="композиції із повітряних кульок, оформлення свята, доставка, Кривий Ріг, перший день народження, для хлопчика, для дівчинки, кульки з гелієм, річниця, індивідуальний напис"
        ></meta>
        <title>Кульки на Перший День народження</title>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1132411369382672"
          crossOrigin="anonymous"
        ></script>
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
