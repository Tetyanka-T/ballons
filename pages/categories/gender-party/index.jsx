import Head from "next/head";
import Header from "../../../components/Header/Header";
import Link from "next/link";
import Footer from "../../../components/Footer/Footer";
import common from "../../../styles/common.module.scss";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import CategoriesListDesktop from "../../../components/CategoriesListDesktop/CategoriesListDesktop";
import Filter from "../../../components/Filter/Filter";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { getAllBalloons } from "../../../lib/balloons";
import BuyButton from "../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";

export const getStaticProps = async () => {
  const response = await getAllBalloons();
  const genderBalloons = response.filter(
    (bal) => bal.category === "Gender party"
  );
  return {
    props: { balloons: genderBalloons },
  };
};

const GenderParty = ({ balloons }) => {
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
        <Novigation section="Визначення статті малюка" />
        <h1 className={common.section_title}>Визначення статті малюка</h1>
        <Filter />
        {balloons && (
          <ul className={s.list}>
            {balloons.map((balloon) => (
              <li key={balloon._id} className={s.card_item}>
                <Link
                  href="/categories/gender-party/[id]"
                  as={`/categories/gender-party/${balloon._id}`}
                >
                  <BalloonCard balloon={balloon} />
                </Link>
                <div className={s.list_button}>
                  <BuyButton balloon={balloon} />
                  <FavoriteButton balloon={balloon} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
      <NoFindComposition />
    </div>
  );
};

export default GenderParty;
