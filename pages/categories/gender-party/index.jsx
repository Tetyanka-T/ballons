import Head from "next/head";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import common from "../../../styles/common.module.scss";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import CategoriesListDesktop from "../../../components/CategoriesListDesktop/CategoriesListDesktop";
import Filter from "../../../components/Filter/Filter";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons"
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { balloons: data.data },
  };
};

const GenderParty = ({ balloons }) => {
  const genderBalloons = balloons.filter(
    (bal) => bal.category === "Gender party"
  );
  console.log(genderBalloons);
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>
      <main className={common.container}>
        <Header />
        <div className={common.section}>
          <CategoriesListDesktop />
          <Novigation section="Визначення статті малюка" />
          <h1 className={common.section_title}>Визначення статті малюка</h1>
          <Filter />
          {balloons && <BalloonCard balloons={genderBalloons} />}
        </div>
      </main>
      <NoFindComposition />
      <footer>
        <Footer />
      </footer>

      <h1></h1>
    </div>
  );
};

export default GenderParty;
