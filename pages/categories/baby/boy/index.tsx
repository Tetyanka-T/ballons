import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { paginate } from "../../../../lib/paginate";
import { getBabyBalloons } from "../../../../lib/balloons";
import BalloonCard from "../../../../components/BalloonCard/BalloonCard";
import NoFindComposition from "../../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../../components/Navigation/Novigation";
import { Sort, PrevPage, NextPage } from "../../../../components/svg";
import BuyButton from "../../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../../components/FavoriteBatton/FavoriteButton";
import s from "../../../../components/BalloonCard/BalloonCard.module.scss";
import common from "../../../../styles/common.module.scss";
import fil from "../../../../components/FilterGender/Filter.module.scss";
import Balloon from "../../../../Interface/interface";

export const getStaticProps = async () => {
  const response = await getBabyBalloons();
  const babyBalloonsBoys = response.filter(
    (bal: Balloon) => bal.grup === "Для хлопчика"
  );
  return {
    props: { balloons: babyBalloonsBoys },
  };
};

const ExtractFromMaternityHospitalBoy = ({ balloons }: {balloons: Balloon[]}) => {
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
  const sortPriceLow = () => {
    balloons.sort((a, b) => (a.price > b.price ? 1 : -1));
    setShowSort(false);
  };
  const sortPriceHigh = () => {
   balloons.sort((a, b) => (a.price < b.price ? 1 : -1));
    setShowSort(false);
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
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, длставка Кривий Ріг, виписка з пологового будинку, для хлопчика, малюка, привіт малюк, ідеї подарунку для молодих батьків, кульки на виписку, лелека, зустріч малюка"
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
          section="Виписка з пологового будинку"
          category="хлопчик"
          linkSection="/categories/baby"
        />
        <h1 className={common.section_title}>
          Виписка з пологового будинку для хлопчика
        </h1>
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
            {paginatedBalloons.map((balloon: Balloon) => (
              <li key={balloon._id} className={s.card_item}>
                <Link
                  href="/categories/baby/boy/[id]"
                  as={`/categories/baby/boy/${balloon._id}`}
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

export default ExtractFromMaternityHospitalBoy;
