import Head from "next/head";
import Link from "next/link";
import { useState, useEffect  } from "react";
import { useRouter } from "next/router";
import Balloon from "../../../Interface/interface";
import { getFasadBalloons } from "../../../lib/balloons";
import { paginate } from "../../../lib/paginate";
import { NextPage, PrevPage, Sort } from "../../../components/svg";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import common from "../../../styles/common.module.scss";
import fil from "../../../components/FilterGender/Filter.module.scss";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";


export const getStaticProps = async () => {
  const response = await getFasadBalloons();

  return {
    props: { balloons: response },
  };
};

const Design = ({ balloons }: {balloons: Balloon[]}) => {
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
  const [showSort, setShowSort] = useState(false);

  const onShowSort = () => {
    setShowSort(true);
    toggleSort();
  };
  const toggleSort = () => {
    showSort ? setShowSort(false) : setShowSort(true);
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
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, прикрашання фасаду магазинів, кафе, декорація, на відкриття магазину, гірлянда, арка з кульок, каркас"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
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

            <>
              {balloons && (
                <ul className={s.list}>
                  {paginatedBalloons.map((balloon: Balloon) => (
                    <li key={balloon._id} className={s.card_item}>
                      <Link
                        href="/categories/facades/[id]"
                        as={`/categories/facades/${balloon._id}`}
                      >
                        <BalloonCard balloon={balloon} />
                      </Link>
                      <div className={s.list_button_favorite_design}>
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
          </>
        )}
      </main>
      <NoFindComposition />
    </div>
  );
};

export default Design;
