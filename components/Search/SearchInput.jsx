import { TextField, ThemeProvider, Modal } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Search } from "../svg";
import s from "./SearchInput.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const SearchInput = () => {
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };
  return (
    <form className={s.search_form}>
      <ThemeProvider theme={theme}>
        <TextField
          autoFocus
          className={s.searchForm_input}
          id="searchBalloon"
          name="searchBalloon"
          placeholder="Знайти композицію"
        />
      </ThemeProvider>
      <button className={s.searchForm_button}>
        <Search width={20} height={20} />
      </button>
    </form>
  );
};

export default SearchInput;
