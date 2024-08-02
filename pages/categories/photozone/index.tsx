import Head from "next/head";
import Balloon from "../../../Interface/interface";
import { getPhotozoneBalloons } from "../../../lib/balloons";
import BalloonsListWithConsultation from "../../../components/BalloonsList/BalloonsListWithConsultation";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";


export const getStaticProps = async () => {
  const response = await getPhotozoneBalloons();
  return {
    props: { balloons: response },
    revalidate: 604800
  };
};

const PhotoZone = ({ balloons }: {balloons: Balloon[]}) => {

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка, Кривий Ріг, фотозона, на день народження, для бізнесу, кругла фотозона, декорація, арка з кульок, гірлянда, каркас"
        ></meta>
        <title>Фотозони</title>
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
        <Novigation section="Фотозони" />
        <h1 className={common.section_title}>Фотозони</h1>
        <BalloonsListWithConsultation balloons={balloons}/>
   
      </main>
      <NoFindComposition />
    </>
  );
};

export default PhotoZone;
