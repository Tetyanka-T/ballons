import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NextPage, PrevPage, Sort } from "../../../components/svg";
import common from "../../../styles/common.module.scss";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import FilterBD from "../../../components/FilterGender/FilterBD";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { getFasadBalloons } from "../../../lib/balloons";
import { paginate } from "../../../lib/paginate";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import fil from "../../../components/FilterGender/Filter.module.scss";

export const getStaticProps = async () => {
  const response = await getFasadBalloons();

  return {
    props: { balloons: response },
  };
};

const Design = ({ balloons }) => {
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
        <Novigation section="Оформлення фасадів" />
        <h1 className={common.section_title}>Оформлення фасадів</h1>
        {balloons.length === 0 ? (
          <h2>Сторінка знаходиться у стадії розробки</h2>
        ) : (
          <>
            <div className={fil.button_filter_container}>
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
                      href="/categories/design/[id]"
                      as={`/categories/design/${balloon._id}`}
                    >
                      <BalloonCard balloon={balloon} />
                    </Link>
                    <div className={s.list_button_favorite}>
                      <FavoriteButton balloon={balloon} />
                    </div>
                    <div className={s.list_button_basket}>
                      <a
                        href="tel:+380968118244"
                        className={s.list_button_consultation}
                      >
                        Отримати консультацію
                      </a>
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
                          href="/categories/design/[id]"
                          as={`/categories/design/${balloon._id}`}
                        >
                          <BalloonCard balloon={balloon} />
                        </Link>
                        <div className={s.list_button_favorite}>
                          <FavoriteButton balloon={balloon} />
                        </div>
                        <div className={s.list_button_basket}>
                          <a
                            href="tel:+380968118244"
                            className={s.list_button_consultation}
                          >
                            Отримати консультацію
                          </a>
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
          </>
        )}
      </main>
      <NoFindComposition />
    </div>
  );
};

export default Design;
