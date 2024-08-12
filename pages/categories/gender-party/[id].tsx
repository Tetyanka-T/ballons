import Head from "next/head";
import Balloon from "../../../Interface/interface";
import { getAllBalloonsIds, getBalloonById } from "../../../lib/balloons";
import CardDescription from "../../../components/CardDescription/CardDescription";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";
import { GoogleTagManager } from "@next/third-parties/google";

type Params = {
	params: {
		id: string
	}
}

export const getStaticPaths = async () => {
  const paths = await getAllBalloonsIds();

  return {
    paths, 
    fallback: 'blocking'
  };
};
export const getStaticProps = async ({ params } : Params) => {
  const balloon = await getBalloonById(params.id);

  return {
    props: {
      balloon: balloon,
    },
    revalidate: 604800
  };
};



const CardId = ({ balloon }: {balloon: Balloon}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, Кривий Ріг, кульки для свята, вечірка на визначення статі дитини, gender-party, хлопчик чи дівчинка, ідеї оформлення вечірки, майбутні батьки, гендер куля, вогнегасник, кольоровий дим, куля сюрприз, коробка з кульками, вагітність, емоції, в очікуванні дива, при надії, майбутня мама, вагітна фотосесія"
        ></meta>
        <title>{balloon.name}</title>
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
            section={balloon.category}
            composition={balloon.name}
          linkSection="/categories/gender-party"
        />
        <CardDescription balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
