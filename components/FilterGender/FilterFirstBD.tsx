import { useState, ChangeEvent } from "react";
import { FilterIcon } from "../svg";
import s from "./Filter.module.scss";

const FilterFirstBD = ({ onChangeGirls, onChangeBoys, onClickFilter }: {
  onChangeGirls: Function,
  onChangeBoys: Function,
  onClickFilter: Function
}) => {
  const [girl, setGirl] = useState(false);
  const [boy, setBoy] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const onShowFilter = () => {
    setShowFilter(true);
    toggleFilter();
  };
  const toggleFilter = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true);
  };

  const handleChangeGirl = async (event: ChangeEvent<HTMLInputElement>) => {
    setGirl(event.target.checked);
    onChangeGirls();
    setBoy(false);
    setShowFilter(false);
    onClickFilter();
  };
  const handleChangeBoy = async (event: ChangeEvent<HTMLInputElement>) => {
    setBoy(event.target.checked);
    onChangeBoys();
    setGirl(false);
    setShowFilter(false);
  };
  return (
    <div className={s.filter_container}>
      <button onClick={() => onShowFilter()} aria-label="фільтрація композицій">
        <FilterIcon />
      </button>
      {showFilter && (
        <div className={s.filter_chekgroup}>
          <div>
            <input type="checkbox" checked={girl} onChange={handleChangeGirl} className={s.orderForm_checkbox_input}/>
            <label className={s.orderForm_checkbox_lable}>дівчатам</label>
          </div>
          
         <div>
          <input type="checkbox" checked={boy} onChange={handleChangeBoy} className={s.orderForm_checkbox_input}/>
          <label className={s.orderForm_checkbox_lable}>хлопчикам</label>
         </div>
        </div>
      )}
    </div>
  );
};

export default FilterFirstBD;
