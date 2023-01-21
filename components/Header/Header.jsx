import Link from "next/link";
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
          <Link href="/favorite">
            <FavoriteContour />
          </Link>
        </li>
        <li className={s.header_user__item}>
          <Link href="/basket">
            <Basket />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
