import Head from "next/head";
import BalloonsListBirthDay from "../../../../components/BalloonsList/BalloonsListBirthDay";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";
import { GoogleTagManager } from "@next/third-parties/google";


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
          content="композиції із повітряних кульок, оформлення свята, доставка, Кривий Ріг, день народження, для чоловіка, для нього, коханому, ідея для подарунку, зв'язка кульок з гелієм, річниця, святковий настрій, трендові оформлення"
        ></meta>
        <title>Кульки на День народження для нього</title>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
        <GoogleTagManager gtmId="G-GQGMTW2BMV" />
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
