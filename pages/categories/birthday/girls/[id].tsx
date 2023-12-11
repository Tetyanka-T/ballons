import Head from "next/head";
import { getAllBalloonsIds, getBalloonById } from "../../../../lib/balloons";
import Balloon from "../../../../Interface/interface";
import CardDescription from "../../../../components/CardDescription/CardDescription";
import Novigation from "../../../../components/Navigation/Novigation";
import common from "../../../../styles/common.module.scss";



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
          content="композиції із повітряних кульок, оформлення свят, доставка Кривий Ріг, день народження, зв'язка для дівчинки, кольорова гама, річниця, індивідуальний напис, кульки з гелієм, трендові оформлення, незабутні враження"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={common.container}>
        <Novigation
          section={balloon.category}
          category={balloon.grup}
          composition={balloon.name}
          linkSection="/categories/birthday"
          linkCategory="/categories/birthday/girls"
        />
        <CardDescription balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
