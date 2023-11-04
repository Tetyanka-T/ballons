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
    revalidate: 3600
  };
};



const CardId = ({ balloon }: {balloon: Balloon}) => {
  return (
    <>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку, для малюків, кульки на виписку, лелека, зустріч малюка, щасливий тато, сім'я, стати батьками"
        ></meta>
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
          linkSection="/categories/baby"
        />
        <CardDescription balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
