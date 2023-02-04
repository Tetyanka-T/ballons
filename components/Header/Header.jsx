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
import s from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [showMenu, SetShowMenu] = useState(false);
  const onShowMenu = () => {
    SetShowMenu(true);
    toggleMenu();
  };
  const toggleMenu = () => {
    showMenu ? SetShowMenu(false) : SetShowMenu(true);
  };

  return (
    <div className={s.header}>
      <div className={s.header_menu}>
        <ul className={s.header_info__list}>
          <li className={s.header_info__list__item}>
            <Link href="/payment-delivery">Оплата і доставка</Link>
          </li>
          <li className={s.header_info__list__item}>
            <Link href="/contacts">Контакти</Link>
          </li>
          <li className={s.header_info__list__item}>
            <Link href="/about-us">Про нас</Link>
          </li>
        </ul>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
