import Head from "next/head";
import { getAllBalloonsIds, getBalloonById } from "../../../lib/balloons";
import Balloon from "../../../Interface/interface";
import CardDescription from "../../../components/CardDescription/CardDescription";
import Novigation from "../../../components/Navigation/Novigation";
import common from "../../../styles/common.module.scss";


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
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, день народження, ідеї подарунка для іменинника, сюрприз, нюдові кульки, трендові оформлення, святковий настрій, індивідуальний напис, кольорова гама, кульки з гелієм, річниця"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>
      <main className={common.container}>
        <Novigation
          section={balloon.category}
          composition={balloon.name}
          linkSection="/categories/birthday"
        />
        <CardDescription balloon={balloon}/>
      
      </main>
    </>
  );
};

export default CardId;
