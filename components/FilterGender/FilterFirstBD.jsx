import { useState } from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { FilterIcon } from "../svg";
import s from "./Filter.module.scss";

const FilterFirstBD = ({ onChangeGirls, onChangeBoys, onClickFilter }) => {
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

  const handleChangeGirl = async (event) => {
    setGirl(event.target.checked);
    onChangeGirls();
    setBoy(false);
    setShowFilter(false);
    onClickFilter();
  };
  const handleChangeBoy = async (event) => {
    setBoy(event.target.checked);
    onChangeBoys();
    setGirl(false);
    setShowFilter(false);
  };
  return (
    <div className={s.filter_container}>
      <button onClick={() => onShowFilter()}>
        <FilterIcon />
      </button>
      {showFilter && (
        <FormGroup className={s.filter_chekgroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={girl}
                onChange={handleChangeGirl}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="дівчатам"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={boy}
                onChange={handleChangeBoy}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="хлопчикам"
          />
        </FormGroup>
      )}
    </div>
  );
};

export default FilterFirstBD;
