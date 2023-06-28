import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { Sort, NextPage, PrevPage } from "../../../components/svg";
import { paginate } from "../../../lib/paginate";
import { getAllBalloons } from "../../../lib/balloons";
import BuyButton from "../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";
import common from "../../../styles/common.module.scss";
import fil from "../../../components/FilterGender/Filter.module.scss";

export const getStaticProps = async () => {
  const response = await getAllBalloons();
  const babyBalloons = response.filter(
    (bal) => bal.category === "Виписка з пологового будинку"
  );
  return {
    props: { balloons: babyBalloons },
  };
};

const ExtractFromMaternityHospital = ({ balloons }) => {
  const [page, SetPage] = useState(1);
  const pageSize = 24;
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
  const fetchNextPage = () => {
    SetPage((prevState) => prevState + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const paginatedBalloons = paginate(balloons, page, pageSize);
  const pagesCount = Math.ceil(balloons.length / pageSize);
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="../balloon.svg" />
      </Head>

      <main className={common.container}>
        <Novigation section="Виписка з пологового будинку" />
        <h1 className={common.section_title}>Виписка з пологового будинку</h1>
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
            {paginatedBalloons.map((balloon) => (
              <li key={balloon._id} className={s.card_item}>
                <Link
                  href="/categories/baby/[id]"
                  as={`/categories/baby/${balloon._id}`}
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
        <div className={common.button_pagenext}>
          {page > 1 && (
            <button type="button" onClick={() => fetchPrevPage()}>
              <PrevPage />
            </button>
          )}

          {page < pagesCount && (
            <button type="button" onClick={() => fetchNextPage()}>
              <NextPage />
            </button>
          )}
        </div>
      </main>
      <NoFindComposition />
    </div>
  );
};

export default ExtractFromMaternityHospital;
