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
      {!showMenu && (
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
      )}

      <div className={s.header_nav}>
        <button onClick={() => onShowMenu()} className={s.showMenu}>
          {showMenu === false && <Menu />}
          {showMenu === true && <Cansel className={s.showMenu_cansel} />}
        </button>
        {showMenu === true && <CategoriesList />}

        {showMenu === false && (
          <div className={s.header_logo}>
            <div className={s.logo}>
              <Image src="/logo.png" alt="logo" width={80} height={80} />
            </div>

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
          </div>
        )}
      </div>

      <div className={s.header_nav}>
        {/* <button onClick={() => onShowMenu()} className={s.showMenu}>
          {showMenu === false && <Menu />}
          {showMenu === true && <Cansel className={s.showMenu_cansel} />}
        </button>
        {showMenu === true && <CategoriesList />} */}

        {/* {showMenu === false && (
          <div className={s.header_logo}> */}
        {/* <div className={s.logo}>
            <Image src="/logo2.jpg" alt="logo" width={100} height={100} />
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </div> */}

        {/* <ul className={s.header_user__list}>
              <li className={s.header_user__item}>
                <Search className={s.header_icon} />
              </li> */}
        {/* <li className={s.header_user__item}>
              <a>
                <User className={s.header_icon} />
              </a>
            </li> */}
        {/* <li className={s.header_user__item}>
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
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
