import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { paginate } from "../../lib/paginate";
import {RouterComeBack} from "../../lib/router";
import BalloonCard from "../BalloonCard/BalloonCard";
import { NextPage, PrevPage, Sort } from "../svg";
import Balloon from "../../Interface/interface";
import FilterBD from "../FilterGender/FilterBD";
import BuyButton from "../BuyButton/BuyButton";
import FavoriteButton from "../FavoriteBatton/FavoriteButton";
import s from "../BalloonCard/BalloonCard.module.scss";
import fil from "../FilterGender/Filter.module.scss";
import common from "../../styles/common.module.scss";


const BalloonsListBirthDay = ({ balloons }: {balloons: Balloon[]} ) => {
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
    const filteredNumber = () => {
      const number = balloons.filter((bal) => bal.filter === "фольговані цифри");
      setFilteredBalloons(number);
    };
    const filteredGiant = () => {
      const giant = balloons.filter((bal) => bal.filter === "гігант");
      setFilteredBalloons(giant);
    };
    const filteredFigures = () => {
      const figure = balloons.filter((bal) => bal.filter === "фольговані фігури");
      setFilteredBalloons(figure);
    };
    const filteredBabls = () => {
      const babls = balloons.filter((bal) => bal.filter === "баблс");
      setFilteredBalloons(babls);
    };
    const filteredBox = () => {
      const box = balloons.filter((bal) => bal.filter === "коробка");
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
    <>
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
              </>
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
            )}</>
  )
}

export default BalloonsListBirthDay;