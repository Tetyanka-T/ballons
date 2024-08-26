import Head from "next/head";
import Novigation from "../../components/Navigation/Novigation";
import Favorite from "../../components/Favorite/Favorite";
import NoFindComposition from "../../components/NoFindComposition/NoFindComposition";
import common from "../../styles/common.module.scss";

const FavoritePage = () => {
  return (
    <div>
      <Head>
        <title>Ваші улюблені композиції</title>
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
