import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Balloon from "../../../../Interface/interface";
import { getBirthDayBalloons } from "../../../../lib/balloons";
import { paginate } from "../../../../lib/paginate";
import BalloonCard from "../../../../components/BalloonCard/BalloonCard";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import { NextPage, PrevPage, Sort } from "../../../../components/svg";
import FilterBD from "../../../../components/FilterGender/FilterBD";
import BuyButton from "../../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../../components/FavoriteBatton/FavoriteButton";
import common from "../../../../styles/common.module.scss";
import s from "../../../../components/BalloonCard/BalloonCard.module.scss";
import fil from "../../../../components/FilterGender/Filter.module.scss";


export const getStaticProps = async () => {
  const response = await getBirthDayBalloons();
  const birthDayHeBalloons = response.filter((bal: Balloon) => bal.grup === "Для нього");
  return {
    props: { balloons: birthDayHeBalloons },
  };
};
const BirthDayHe = ({ balloons }: {balloons: Balloon[]}) => {
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
  const [filteredBalloons, setFilteredBalloons] = useState<any[]>([]);
  const [filter, setFilter] = useState(false);
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
    window.scroll(0, 0);
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
    window.scroll(0, 0);
  };
  const paginatedBalloons = paginate(balloons, page, pageSize);
  const pagesCount = Math.ceil(balloons.length / pageSize);
  const sortPriceLow = () => {
    balloons.sort((a, b) => (a.price > b.price ? 1 : -1));
    setShowSort(false);
  };
  const sortPriceHigh = () => {
    balloons.sort((a, b) => (a.price < b.price ? 1 : -1));
    setShowSort(false);
  };
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, день народження, для чоловіка, для нього, коханому, ідея для подарунку, зв'язка кульок з гелієм, річниця, святковий настрій, трендові оформлення"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <Novigation
          section="День народження"
          linkSection="/categories/birthday"
          category="Для нього"
          linkCategory="/categories/birthday/he"
        />
        <h1 className={common.section_title}>День народження для нього</h1>
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
          <>
            {filteredBalloons.length === 0 && <h2>Відсутні</h2>}
            <ul className={s.list}>
              {filteredBalloons.map((balloon) => (
                <li key={balloon._id} className={s.card_item}>
                  <Link
                    href="/categories/birthday/he/[id]"
                    as={`/categories/birthday/he/${balloon._id}`}
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
          </>
        ) : (
          <>
            {balloons && (
              <ul className={s.list}>
                {paginatedBalloons.map((balloon: Balloon) => (
                  <li key={balloon._id} className={s.card_item}>
                    <Link
                      href="/categories/birthday/he/[id]"
                      as={`/categories/birthday/he/${balloon._id}`}
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

export default BirthDayHe;
