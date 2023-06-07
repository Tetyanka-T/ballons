import Head from "next/head";
import common from "../../styles/common.module.scss";
import Novigation from "../../components/Navigation/Novigation";
import Favorite from "../../components/Favorite/Favorite";
import NoFindComposition from "../../components/NoFindComposition/NoFindComposition";

const FavoritePage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={common.container}>
        <Novigation section="Ваші улюблені композиції" />
        <h1 className={common.section_title}>Ваші улюблені композиції</h1>
        <Favorite />
      </main>
      <NoFindComposition />
    </div>
  );
};

export default FavoritePage;
