import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { paginate } from "../../lib/paginate";
import {RouterComeBack} from "../../lib/router";
import BalloonCard from "../BalloonCard/BalloonCard";
import { Sort, PrevPage, NextPage } from "../svg";
import BuyButton from "../BuyButton/BuyButton";
import FavoriteButton from "../FavoriteBatton/FavoriteButton";
import s from "../BalloonCard/BalloonCard.module.scss";
import common from "../../styles/common.module.scss";
import fil from "../FilterGender/Filter.module.scss";
import Balloon from "../../Interface/interface";


const BalloonsList = ({ balloons }: {balloons: Balloon[]}) => {
    const router = useRouter();
    RouterComeBack();
    
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
        <>
         <div className={fil.sort_button}>
            <button onClick={() => onShowSort()} type="button" aria-label="сортування за ціною">
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
                  href={`${router.pathname}/[id]`}
                  as={`${router.pathname}/${balloon._id}`}
                  aria-label="посилання на сторінку з детальним описом композиції"
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
          <button type="button" onClick={() => fetchPrevPage()} aria-label="повернутися на попердню сторінку">
            <PrevPage />
          </button>
        )}

        {page < pagesCount && (
          <button type="button" onClick={() => fetchNextPage()} aria-label="перейти на наступну сторінку">
            <NextPage />
          </button>
        )}
      </div>
        </>
    )
}


export default BalloonsList;