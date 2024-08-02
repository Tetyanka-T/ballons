import Head from "next/head";
import Balloon from "../../../Interface/interface";
import Novigation from "../../../components/Navigation/Novigation";
import { getAllBalloonsIds, getBalloonById } from "../../../lib/balloons";
import common from "../../../styles/common.module.scss";
import CardDescriptionWithConsultation from "../../../components/CardDescription/CardDescriptionWithConsultation";

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
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, прикрашання фасаду магазинів, кафе, декорація, на відкриття магазину, гірлянда, арка з кульок, каркас"
        ></meta>
        <title>Оформлення фасадів кульками</title>
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
          composition={balloon.name}
          linkSection="/categories/facades"
        />
        <CardDescriptionWithConsultation balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
