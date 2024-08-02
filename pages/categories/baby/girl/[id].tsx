import Head from "next/head";
import CardDescription from "../../../../components/CardDescription/CardDescription";
import common from "../../../../styles/common.module.scss";
import Novigation from "../../../../components/Navigation/Novigation";
import { getAllBalloonsIds, getBalloonById } from "../../../../lib/balloons";
import Balloon from "../../../../Interface/interface";

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
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку, для дівчинки, для малюка, привіт малюк, чим порадувати молоду маму, прикрасити квартиру, кульки на виписку"
        ></meta>
        <title>{balloon.name}</title>
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
          section={balloon.category}
          category={balloon.grup}
          composition={balloon.name}
          linkSection="/categories/baby"
          linkCategory="/categories/baby/girl"
        />
        <CardDescription balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
