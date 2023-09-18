import { useState, ChangeEvent } from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
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
        <FormGroup className={s.filter_chekgroup}>
          <FormControlLabel
            control={
              <Checkbox
                checked={numbers}
                onChange={handleChangeNumbers}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="фольговані цифри"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={giant}
                onChange={handleChangeGiant}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="гігант"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={figures}
                onChange={handleChangeFigures}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="фольговані фігури"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={babls}
                onChange={handleBabls}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="баблс"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={box}
                onChange={handleChangeBox}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="коробка"
          />
        </FormGroup>
      )}
    </div>
  );
};

export default FilterBD;
