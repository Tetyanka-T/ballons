import Head from "next/head";
import CardDescription from "../../../../components/CardDescription/CardDescription";
import Balloon from "../../../../Interface/interface";
import { getAllBalloonsIds, getBalloonById } from "../../../../lib/balloons";
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
    fallback: false,
  };
};
export const getStaticProps = async ({ params } : Params ) => {
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
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, день народження, для чоловіка, для нього, коханому, ідея для подарунку, зв'язка кульок з гелієм, річниця, святковий настрій, трендові оформлення"
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
          linkSection="/categories/birthday"
          linkCategory="/categories/birthday/he"
        />
        <CardDescription balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
