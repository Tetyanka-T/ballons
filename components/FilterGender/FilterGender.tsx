import { useState, ChangeEvent } from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { FilterIcon } from "../svg";
import s from "./Filter.module.scss";

export default function FilterGender({
  onChangeWomen,
  onChangeMan,
  onChangeGirls,
  onChangeBoy,
  onClickFilter,
}: {
  onChangeWomen: Function,
  onChangeMan: Function,
  onChangeGirls: Function,
  onChangeBoy: Function,
  onClickFilter: Function
}) {
  const [women, setWomen] = useState(false);
  const [man, setMan] = useState(false);
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
  const handleChangeWomen = async (event: ChangeEvent<HTMLInputElement>) => {
    setWomen(event.target.checked);
    onChangeWomen();
    setMan(false);
    setBoy(false);
    setGirl(false);
    onClickFilter();
    setShowFilter(false);
  };
  const handleChangeMan = async (event: ChangeEvent<HTMLInputElement>) => {
    setMan(event.target.checked);
    onChangeMan();
    setWomen(false);
    setBoy(false);
    setGirl(false);
    setShowFilter(false);
  };
  const handleChangeGirl = async (event: ChangeEvent<HTMLInputElement>) => {
    setGirl(event.target.checked);
    onChangeGirls();
    setMan(false);
    setBoy(false);
    setWomen(false);
    setShowFilter(false);
  };
  const handleChangeBoy = async (event: ChangeEvent<HTMLInputElement>) => {
    setBoy(event.target.checked);
    onChangeBoy();
    setMan(false);
    setWomen(false);
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
                checked={women}
                onChange={handleChangeWomen}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="жінкам"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={man}
                onChange={handleChangeMan}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="чоловікам"
          />
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
}
