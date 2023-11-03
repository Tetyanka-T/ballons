"use client"
import { useState, ChangeEvent } from "react";
import { FilterIcon } from "../svg";
import s from "./Filter.module.scss";

const FilterBD = ({
  onChangeNumbers,
  onClickFilter,
  onChangeGiant,
  onChangeFigures,
  onChangeBabls,
  onChangeBox,
} : {onChangeNumbers: Function,
  onClickFilter: Function,
  onChangeGiant: Function,
  onChangeFigures: Function,
  onChangeBabls: Function,
  onChangeBox: Function
}) => {
  const [numbers, setNumbers] = useState(false);
  const [giant, setGiant] = useState(false);
  const [figures, setFigures] = useState(false);
  const [babls, setBabls] = useState(false);
  const [box, setBox] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const onShowFilter = () => {
    setShowFilter(true);
    toggleFilter();
  };
  const toggleFilter = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true);
  };
  const handleChangeNumbers = async (event: ChangeEvent<HTMLInputElement> ) => {
    setNumbers(event.target.checked);
    onChangeNumbers();
    setGiant(false);
    setFigures(false);
    setBabls(false);
    setBox(false);
    onClickFilter();
    setShowFilter(false);
  };
  const handleChangeGiant = async (event: ChangeEvent<HTMLInputElement> ) => {
    setGiant(event.target.checked);
    onChangeGiant();
    setNumbers(false);
    setFigures(false);
    setBabls(false);
    setBox(false);
    onClickFilter();
    setShowFilter(false);
  };
  const handleChangeFigures = async (event: ChangeEvent<HTMLInputElement>) => {
    setFigures(event.target.checked);
    onChangeFigures();
    setNumbers(false);
    setGiant(false);
    setBabls(false);
    setBox(false);
    setShowFilter(false);
    onClickFilter();
  };
  const handleBabls = async (event: ChangeEvent<HTMLInputElement>) => {
    setBabls(event.target.checked);
    onChangeBabls();
    setNumbers(false);
    setFigures(false);
    setGiant(false);
    setBox(false);
    setShowFilter(false);
    onClickFilter();
  };
  const handleChangeBox = async (event: ChangeEvent<HTMLInputElement>) => {
    setBox(event.target.checked);
    onChangeBox();
    setNumbers(false);
    setFigures(false);
    setBabls(false);
    setGiant(false);
    setShowFilter(false);
  };
  return (
    <div className={s.filter_container}>
      <button onClick={() => onShowFilter()}>
        <FilterIcon />
      </button>
      {showFilter && (
        <div className={s.filter_chekgroup}>
          <div>
            <input type="checkbox" checked={numbers}  onChange={handleChangeNumbers} className={s.orderForm_checkbox_input}/>
            <label className={s.orderForm_checkbox_lable}>фольговані цифри</label>
          </div>
          
         <div>
          <input type="checkbox" checked={giant} onChange={handleChangeGiant} className={s.orderForm_checkbox_input}/>
          <label className={s.orderForm_checkbox_lable}>гігант</label>
         </div>
         <div>
            <input type="checkbox" checked={figures} onChange={handleChangeFigures} className={s.orderForm_checkbox_input} />
            <label className={s.orderForm_checkbox_lable}>фольговані фігури</label>
         </div>
         <div>
            <input type="checkbox" checked={babls} onChange={handleBabls} className={s.orderForm_checkbox_input}/>
            <label className={s.orderForm_checkbox_lable}>баблс</label>
         </div>
         <div>
            <input type="checkbox" checked={box} onChange={handleChangeBox} className={s.orderForm_checkbox_input}/>
            <label className={s.orderForm_checkbox_lable}>коробка</label>
         </div>
        </div>
      )}
    </div>
  );
};

export default FilterBD;
