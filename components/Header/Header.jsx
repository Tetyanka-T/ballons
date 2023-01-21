import { Basket, Favorite, FavoriteContour, Search, User } from "../svg";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <ul className={s.header_user__list}>
        <li className={s.header_user__item}>
          <Search />
        </li>
        <li className={s.header_user__item}>
          <a>
            <User />
          </a>
        </li>
        <li className={s.header_user__item}>
          <a>
            <FavoriteContour />
          </a>
        </li>
        <li className={s.header_user__item}>
          <a>
            <Basket />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
