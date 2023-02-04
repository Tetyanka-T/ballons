import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import {
  Basket,
  Favorite,
  FavoriteContour,
  Search,
  User,
  Cansel,
  Menu,
} from "../svg";
import s from "./NavBar.module.scss";

const NavigatorBar = () => {
  const [showMenu, SetShowMenu] = useState(false);
  const onShowMenu = () => {
    SetShowMenu(true);
    toggleMenu();
  };
  const toggleMenu = () => {
    showMenu ? SetShowMenu(false) : SetShowMenu(true);
  };

  return (
    <div className={s.header_nav}>
      <div className={s.header_logo}>
        <button onClick={() => onShowMenu()} className={s.showMenu}>
          {showMenu === false && <Menu />}
          {showMenu === true && <Cansel className={s.showMenu_cansel} />}
        </button>
        <div className={s.logo}>
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>
      </div>

      {showMenu === true && <CategoriesList />}

      {showMenu === false && (
        <ul className={s.header_user__list}>
          <li className={s.header_user__item}>
            <Search className={s.header_icon} />
          </li>
          <li className={s.header_user__item}>
            <Link href="/favorite">
              <FavoriteContour className={s.header_icon} />
            </Link>
          </li>
          <li className={s.header_user__item}>
            <Link href="/basket">
              <Basket className={s.header_icon} />
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavigatorBar;
