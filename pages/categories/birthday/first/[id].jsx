import Head from "next/head";
import common from "../../../../styles/common.module.scss";
import Novigation from "../../../../components/Navigation/Novigation";
import CardDescription from "../../../../components/CardDescription/CardDescription";
import { getAllBalloonsIds, getBalloonById } from "../../../../lib/balloons";

export const getStaticPaths = async () => {
  const paths = await getAllBalloonsIds();

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const balloon = await getBalloonById(params.id);
  return {
    props: {
      balloon: balloon,
    },
  };
};

// interface Balloon {
//   imgSrc: string;
//   name: string;
//   price: number;
//   id: URL;

// }

const CardId = ({ balloon }) => {
  return (
    <>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>
      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="1-й День народження"
          linkCategory="/categories/birthday/first"
          composition="Композиція"
        />

        <CardDescription balloon={balloon} />
      </main>
    </>
  );
};

export default CardId;
