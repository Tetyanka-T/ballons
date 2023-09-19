import Head from "next/head";
import { getAllBalloonsIds, getBalloonById } from "../../../../lib/balloons";
import Novigation from "../../../../components/Navigation/Novigation";
import CardDescription from "../../../../components/CardDescription/CardDescription";
import Balloon from "../../../../Interface/interface";
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
    fallback: false
  };
};
export const getStaticProps = async ({ params } : Params) => {
  const balloon = await getBalloonById(params.id);

  return {
    props: {
      balloon: balloon,
    },
  };
};


const CardId = ({ balloon }: {balloon: Balloon}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, виписка з пологового будинку, для хлопчика, малюка, привіт малюк, ідеї подарунку для молодих батьків, кульки на виписку, лелека, зустріч малюка"
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
          category={balloon.grup}
          composition={balloon.name}
          linkSection="/categories/baby"
          linkCategory="/categories/baby/boy"
        />
        <CardDescription balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
