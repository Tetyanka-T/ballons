import Head from "next/head";
import Balloon from "../../../Interface/interface";
import { getAllBalloonsIds, getBalloonById } from "../../../lib/balloons";
import CardDescriptionWithConsultation from "../../../components/CardDescription/CardDescriptionWithConsultation";
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
          content={balloon.description}
        ></meta>
        <title>{balloon.name}</title>
      </Head>
      <main className={common.container}>
        <Novigation
          section={balloon.category}
          composition={balloon.name}
          linkSection="/categories/photozone"
        />
        <CardDescriptionWithConsultation balloon={balloon}/>
      </main>
    </>
  );
};

export default CardId;
