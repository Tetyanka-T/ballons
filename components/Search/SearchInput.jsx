import { useState } from "react";
import Link from "next/link";
import { TextField, Alert } from "@mui/material";
import BalloonCard from "../BalloonCard/BalloonCard";
import FavoriteButton from "../FavoriteBatton/FavoriteButton";
import BuyButton from "../BuyButton/BuyButton";
import { paginate } from "../../lib/paginate";
import { Search, PrevPage, NextPage } from "../svg";
import common from "../../styles/common.module.scss";
import ss from "../BalloonCard/BalloonCard.module.scss";

import s from "./SearchInput.module.scss";

const SearchInput = () => {
  const [page, SetPage] = useState(1);
  const pageSize = 24;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchNextPage = () => {
    SetPage((prevState) => prevState + 1);
  };
  const fetchPrevPage = () => {
    SetPage((prevState) => prevState - 1);
  };
  const paginatedBalloons = paginate(results, page, pageSize);
  const pagesCount = Math.ceil(results.length / pageSize);
  const searchEndpoint = (query) =>
    `https://backend-balloons.netlify.app/api/search/${query}`;
    // `https://balloons-shop.onrender.com/api/search/${query}`;

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }

    fetch(searchEndpoint(query))
      .then((res) => res.json())
      .then((res) => {
        if (res.length === 0) {
          alert(`За вашим запитом '${query}' композиції відсутні`);
        }
        setResults(res);
      });
    setQuery("");
  };
  return (
    <>
      <form className={s.search_form} onSubmit={handleSubmit}>
        <TextField
          autoFocus
          className={s.searchForm_input}
          id="searchBalloon"
          name="searchBalloon"
          placeholder="Знайти композицію"
          value={query}
          onChange={onChange}
        />

        <button className={s.searchForm_button} type="submit">
          <Search width={20} height={20} />
        </button>
      </form>

      {results && (
        <ul className={ss.list}>
          {paginatedBalloons.map((balloon) => (
            <li key={balloon._id} className={ss.card_item}>
              <Link href="/categories/[id]" as={`/categories/${balloon._id}`}>
                <BalloonCard balloon={balloon} />
              </Link>
              <div className={ss.list_button_favorite}>
                <FavoriteButton balloon={balloon} />
              </div>
              <div className={ss.list_button_basket}>
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
  );
};

export default SearchInput;
