import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NextPage, PrevPage } from "../../../components/svg";
import common from "../../../styles/common.module.scss";
import BalloonCard from "../../../components/BalloonCard/BalloonCard";
import Filter from "../../../components/Filter/Filter";
import NoFindComposition from "../../../components/NoFindComposition/NoFindComposition";
import Novigation from "../../../components/Navigation/Novigation";
import { getAllBalloons } from "../../../lib/balloons";
import { paginate } from "../../../lib/paginate";
import s from "../../../components/BalloonCard/BalloonCard.module.scss";
import BuyButton from "../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";

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

  const fetchNextPage = () => {
    SetPage((prevState) => prevState + 1);
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
  };
  const paginatedPosts = paginate(balloons, page, pageSize);
  const pagesCount = Math.ceil(balloons.length / pageSize);
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
        <Filter />
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
                <div className={s.list_button}>
                  <BuyButton balloon={balloon} />
                  <FavoriteButton balloon={balloon} />
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

export default BirthDays;
