import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import BalloonCard from "../../../../components/BalloonCard/BalloonCard";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import { NextPage, PrevPage, Sort } from "../../../../components/svg";
import common from "../../../../styles/common.module.scss";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import { paginate } from "../../../../lib/paginate";
import FilterFirstBD from "../../../../components/FilterGender/FilterFirstBD";
import BuyButton from "../../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../../components/FavoriteBatton/FavoriteButton";
import s from "../../../../components/BalloonCard/BalloonCard.module.scss";
import fil from "../../../../components/FilterGender/Filter.module.scss";

export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDayFirstBalloons = response.filter(
    (bal) => bal.grup === "Перший день народження"
  );
  return {
    props: { balloons: birthDayFirstBalloons },
  };
};

const FirstBirthDay = ({ balloons }) => {
  const router = useRouter();

  // set scroll restoration to manual
  useEffect(() => {
    if (
      "scrollRestoration" in history &&
      history.scrollRestoration !== "manual"
    ) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // handle and store scroll position
  useEffect(() => {
    const handleRouteChange = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  // restore scroll position
  useEffect(() => {
    if ("scrollPosition" in sessionStorage) {
      window.scrollTo(0, Number(sessionStorage.getItem("scrollPosition")));
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);
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

  const filteredGirl = () => {
    const girl = balloons.filter((bal) => bal.gender === "дівчинка");
    const girl2 = balloons.filter((bal) => bal.gender === "хлопчик, дівчинка");
    const girls = [...girl, ...girl2];
    setFilteredBalloons(girls);
  };
  const filteredBoy = () => {
    const boy = balloons.filter((bal) => bal.gender === "хлопчик");
    const boy2 = balloons.filter((bal) => bal.gender === "хлопчик, дівчинка");
    const boys = [...boy, ...boy2];
    setFilteredBalloons(boys);
  };

  const fetchNextPage = () => {
    SetPage((prevState) => prevState + 1);
    window.scroll(0, 0);
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
    window.scroll(0, 0);
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
          name="keywords"
          content="Інтернет-магазин композицій із повітряних кульок, оформлення свят, Кривий Ріг, перший день народження, для хлопчика, для дівчинки"
        ></meta>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="1-й День народження"
          linkCategory="/categories/birthday/first"
        />
        <h1 className={common.section_title}>Перший День народження</h1>
        <div className={fil.button_filter_container}>
          <FilterFirstBD
            onChangeGirls={filteredGirl}
            onChangeBoys={filteredBoy}
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
                  href="/categories/birthday/first/[id]"
                  as={`/categories/birthday/first/${balloon._id}`}
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
                {paginatedBalloons.map((balloon) => (
                  <li key={balloon._id} className={s.card_item}>
                    <Link
                      href="/categories/birthday/first/[id]"
                      as={`/categories/birthday/first/${balloon._id}`}
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

export default FirstBirthDay;
