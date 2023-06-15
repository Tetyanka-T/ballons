import { TextField, Modal } from "@mui/material";
import { Search } from "../svg";
import s from "./SearchInput.module.scss";

const SearchInput = () => {
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };
  return (
    <form className={s.search_form}>
      <TextField
        autoFocus
        className={s.searchForm_input}
        id="searchBalloon"
        name="searchBalloon"
        placeholder="Знайти композицію"
      />

      <button className={s.searchForm_button}>
        <Search width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchInput;
