"use client"
import { useState } from "react";
import { Sort } from "../svg";
import s from "./SortbyPrice.module.scss";

const SortbyPrice = ({ sortLow, sortHigh, onClickSort } :
  {
    sortLow: Function,
    sortHigh: Function,
    onClickSort: Function
  }) => {
  const [showSort, setShowSort] = useState(false);

  const onShowSort = () => {
    setShowSort(true);
    toggleSort();
    onClickSort();
  };
  const toggleSort = () => {
    showSort ? setShowSort(false) : setShowSort(true);
  };
  return (
    <div className={s.sort_container}>
      <button onClick={() => onShowSort()}>
        <Sort />
      </button>
      {showSort && (
        <ul className={s.sort_list}>
          <li onClick={() => sortLow()}>за зростанням</li>
          <li onClick={() => sortHigh()}>за зменшенням</li>
        </ul>
      )}
    </div>
  );
};

export default SortbyPrice;
