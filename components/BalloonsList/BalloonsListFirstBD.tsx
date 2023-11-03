"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import {RouterComeBack} from "../../lib/router";
import Balloon from "../../Interface/interface";
import { paginate } from "../../lib/paginate";
import BalloonCard from "../BalloonCard/BalloonCard";
import { NextPage, PrevPage, Sort } from "../svg";
import FilterFirstBD from "../FilterGender/FilterFirstBD";
import BuyButton from "../BuyButton/BuyButton";
import FavoriteButton from "../FavoriteBatton/FavoriteButton";
import s from "../BalloonCard/BalloonCard.module.scss";
import fil from "../FilterGender/Filter.module.scss";
import common from "../../styles/common.module.scss";

const BalloonsListFirstBD = ({ balloons }: {balloons: Balloon[]} ) => {
    const router = useRouter();
    RouterComeBack();
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
      balloons.sort((a, b) => (a.price > b.price ? 1 : -1));
      setShowSort(false);
    };
    const sortPriceHigh = () => {
      balloons.sort((a, b) => (a.price < b.price ? 1 : -1));
      setShowSort(false);
    };
   
  return (
    <>
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
                 href={`${router.pathname}/[id]`}
                 as={`${router.pathname}/${balloon._id}`}
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
                {paginatedBalloons.map((balloon: Balloon) => (
                  <li key={balloon._id} className={s.card_item}>
                    <Link
                       href={`${router.pathname}/[id]`}
                       as={`${router.pathname}/${balloon._id}`}
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
    </>
  )
}

export default BalloonsListFirstBD