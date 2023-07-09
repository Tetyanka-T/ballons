import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import common from "../../styles/common.module.scss";
import BalloonCard from "../../components/BalloonCard/BalloonCard";
import { NextPage, PrevPage, Sort } from "../../components/svg";
import FilterGender from "../../components/FilterGender/FilterGender";
import NoFindComposition from "../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../components/Navigation/Novigation";
import { getAllBalloons, getAllBalloonsLimit } from "../../lib/balloons";
import { paginate } from "../../lib/paginate";
import BuyButton from "../../components/BuyButton/BuyButton";
import FavoriteButton from "../../components/FavoriteBatton/FavoriteButton";
import s from "../../components/BalloonCard/BalloonCard.module.scss";
import fil from "../../components/FilterGender/Filter.module.scss";

export const getStaticProps = async () => {
  const response = await getAllBalloons();
  return {
    props: { balloons: response },
  };
};

const CategoriesPage = ({ balloons }) => {
  const [page, SetPage] = useState(1);
  const pageSize = 24;
  const [filteredBalloons, setFilteredBalloons] = useState([]);
  const [filter, setFilter] = useState(false);
  const [sortered, setSortered] = useState([]);
  const [showSort, setShowSort] = useState(false);
  const onShowSort = () => {
    setShowSort(true);
    toggleSort();
    setFilter(false);
  };
  const toggleSort = () => {
    showSort ? setShowSort(false) : setShowSort(true);
  };

  const filteredWomen = () => {
    const woman = balloons.filter((bal) => bal.gender === "жінка, дівчинка");
    const woman2 = balloons.filter((bal) => bal.gender === "жінка");
    const women = [...woman, ...woman2];
    setFilteredBalloons(women);
  };
  const filteredMan = () => {
    const man = balloons.filter((bal) => bal.gender === "чоловік, хлопчик");
    const man2 = balloons.filter((bal) => bal.gender === "чоловік");
    const men = [...man, ...man2];
    setFilteredBalloons(men);
  };
  const filteredGirl = () => {
    const girl = balloons.filter((bal) => bal.gender === "дівчинка");
    const girl2 = balloons.filter((bal) => bal.gender === "жінка, дівчинка");
    const girls = [...girl, ...girl2];
    setFilteredBalloons(girls);
  };
  const filteredBoy = () => {
    const boy = balloons.filter((bal) => bal.gender === "хлопчик");
    const boy2 = balloons.filter((bal) => bal.gender === "чоловік, хлопчик");
    const boys = [...boy, ...boy2];
    setFilteredBalloons(boys);
  };

  const fetchNextPage = () => {
    SetPage((prevState) => prevState + 1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const paginatedBalloons = paginate(balloons, page, pageSize);
  const pagesCount = Math.ceil(balloons.length / pageSize);
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
        <link rel="icon" href="./balloon.svg" />
      </Head>
      <main className={common.container}>
        <Novigation section="Всі композиції" linkSection="/categories" />
        <h1 className={common.section_title}>Всі композиції</h1>
        <div className={fil.button_filter_container}>
          <FilterGender
            onChangeWomen={filteredWomen}
            onChangeMan={filteredMan}
            onChangeGirls={filteredGirl}
            onChangeBoy={filteredBoy}
            onClickFilter={() => setFilter(true)}
          />
          <div className={fil.sort_container}>
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
        </div>

        {filter === true ? (
          <ul className={s.list}>
            {filteredBalloons.map((balloon) => (
              <li key={balloon._id} className={s.card_item}>
                <Link href="/categories/[id]" as={`/categories/${balloon._id}`}>
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
        ) : (
          <>
            {balloons && (
              <ul className={s.list}>
                {paginatedBalloons.map((balloon) => (
                  <li key={balloon._id} className={s.card_item}>
                    <Link
                      href="/categories/[id]"
                      as={`/categories/${balloon._id}`}
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
          </>
        )}
      </main>
      <NoFindComposition />
    </div>
  );
};

export default CategoriesPage;
