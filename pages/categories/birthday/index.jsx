import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NextPage, PrevPage, Sort } from "../../../components/svg";
import common from "../../../styles/common.module.scss";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import FilterBD from "../../../components/FilterGender/FilterBD";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { getAllBalloons } from "../../../lib/balloons";
import { paginate } from "../../../lib/paginate";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";
import BuyButton from "../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import fil from "../../../components/FilterGender/Filter.module.scss";

export const getStaticProps = async () => {
  const response = await getAllBalloons();
  const birthdayBalloons = response.filter(
    (bal) => bal.category === "День народження"
  );
  return {
    props: { balloons: birthdayBalloons },
  };
};

const BirthDays = ({ balloons }) => {
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
  const filteredNumber = () => {
    const number = balloons.filter((bal) => bal.filter === "фольговані цифри");
    const number2 = balloons.filter(
      (bal) => bal.filter === "фольговані цифри, фольговані фігури"
    );
    const number3 = balloons.filter(
      (bal) => bal.filter === "гігант, фольговані цифри"
    );
    const number4 = balloons.filter(
      (bal) => bal.filter === "фольговані цифри, фольговані фігури, гігант"
    );
    const numbers = [...number, ...number2, ...number3, ...number4];
    setFilteredBalloons(numbers);
  };
  const filteredGiant = () => {
    const giant = balloons.filter((bal) => bal.filter === "гігант");
    const giant2 = balloons.filter(
      (bal) => bal.filter === "гігант, фольговані цифри"
    );
    const giant3 = balloons.filter(
      (bal) => bal.filter === "фольговані цифри, фольговані фігури, гігант"
    );
    const giant4 = balloons.filter((bal) => bal.filter === "гігант, баблс");
    const giants = [...giant, ...giant2, ...giant3, ...giant4];
    setFilteredBalloons(giants);
  };
  const filteredFigures = () => {
    const figure = balloons.filter(
      (bal) => bal.filter === "фольговані цифри, фольговані фігури"
    );
    const figure2 = balloons.filter(
      (bal) => bal.filter === "фольговані фігури"
    );
    const figure3 = balloons.filter(
      (bal) => bal.filter === "фольговані цифри, фольговані фігури, гігант"
    );
    const figures = [...figure, ...figure2, ...figure3];
    setFilteredBalloons(figures);
  };
  const filteredBabls = () => {
    const babls = balloons.filter((bal) => bal.filter === "баблс");
    const babls2 = balloons.filter((bal) => bal.filter === "гігант, баблс");
    const allbabls = [...babls, ...babls2];
    setFilteredBalloons(allbabls);
  };
  const filteredBox = () => {
    const box = balloons.filter(
      (bal) => bal.filter === "фольговані цифри, фольговані фігури, коробка"
    );
    setFilteredBalloons(box);
  };
  const fetchNextPage = () => {
    SetPage((prevState) => prevState + 1);
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
  };
  const paginatedPosts = paginate(balloons, page, pageSize);
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
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <Novigation section="День народження" />
        <h1 className={common.section_title}>День народження</h1>
        <div className={fil.button_filter_container}>
          <FilterBD
            onChangeNumbers={filteredNumber}
            onChangeGiant={filteredGiant}
            onChangeFigures={filteredFigures}
            onChangeBabls={filteredBabls}
            onChangeBox={filteredBox}
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
                <Link
                  href="/categories/birthday/[id]"
                  as={`/categories/birthday/${balloon._id}`}
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
        ) : (
          <>
            {balloons && (
              <ul className={s.list}>
                {paginatedPosts.map((balloon) => (
                  <li key={balloon._id} className={s.card_item}>
                    <Link
                      href="/categories/birthday/[id]"
                      as={`/categories/birthday/${balloon._id}`}
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

export default BirthDays;
