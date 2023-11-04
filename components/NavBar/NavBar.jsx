import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Basket, FavoriteContour, Search, Menu } from "../svg";
import s from "./NavBar.module.scss";

const NavigatorBar = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;
  const { favorite } = useContext(CartContext);
  const favoriteItems = favorite?.favoriteItems;
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
        <button
          onClick={() => onShowMenu()}
          className={s.showMenu}
          aria-label="відкрити мобільне меню"
        >
          {!showMenu && <Menu />}
        </button>
        {!showMenu && (
          <div className={s.logo}>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={70} />
            </Link>
          </div>
        )}
      </div>

      <div className={showMenu ? "active" : "mobile_background"}>
        <div className={showMenu ? "activeContent" : "mobilemenu_content"}>
          <span
            className={s.showMenu_cansel}
            onClick={() => onShowMenu()}
            aria-label="закрити мобільне меню"
          >
            Закрити
          </span>
          <CategoriesList onClick={onShowMenu} />
        </div>
      </div>

      {!showMenu && (
        <>
          <ul className={s.header_user__list}>
            <li className={s.header_user__item}>
              <Link
                href="/search"
                aria-label="сторінка пошуку композицій за назвою"
              >
                <Search className={s.header_icon} />
              </Link>
            </li>
            <li className={s.header_user__item}>
              <Link
                href="/favorite"
                className={s.header_icon_count}
                aria-label="сторінка улюблених композицій користувача"
              >
                <FavoriteContour className={s.header_icon} />

                <p className={s.basket_count}>{favoriteItems?.length || 0}</p>
              </Link>
            </li>
            <li className={s.header_user__item}>
              <Link
                href="/basket"
                className={s.header_icon_count}
                aria-label="кошик покупок"
              >
                <Basket className={s.header_icon} />
                <p className={s.basket_count}>{cartItems?.length || 0}</p>
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavigatorBar;
