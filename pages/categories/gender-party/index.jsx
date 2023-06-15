import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { Sort } from "../../../components/svg";
import { getAllBalloons } from "../../../lib/balloons";
import BuyButton from "../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";
import common from "../../../styles/common.module.scss";
import fil from "../../../components/FilterGender/Filter.module.scss";

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
  const [showSort, setShowSort] = useState(false);
  const [sortered, setSortered] = useState([]);
  const onShowSort = () => {
    setShowSort(true);
    toggleSort();
  };
  const toggleSort = () => {
    showSort ? setShowSort(false) : setShowSort(true);
  };
  const sortPriceLow = () => {
    const lowPrice = balloons.sort((a, b) => (a.price > b.price ? 1 : -1));
    setSortered(lowPrice);
    setShowSort(false);
  };
  const sortPriceHigh = () => {
    const higePrice = balloons.sort((a, b) => (a.price < b.price ? 1 : -1));
    setSortered(higePrice);
    setShowSort(false);
  };

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
        <div className={fil.sort_button}>
          <button onClick={() => onShowSort()}>
            <Sort />
          </button>
          {showSort && (
            <ul className={fil.sort_list}>
              <li onClick={() => sortPriceLow()}>за зростанням</li>
              <li onClick={() => sortPriceHigh()}>за зменшенням</li>
            </ul>
          )}
        </div>
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
                <div className={s.list_button_favorite}>
                  <FavoriteButton balloon={balloon} />
                </div>
                <div className={s.list_button_basket}>
                  <BuyButton balloon={balloon} />
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
