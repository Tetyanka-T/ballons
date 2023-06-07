import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Modal, Box } from "@mui/material";
import SearchInput from "../Search/SearchInput";
import { Basket, FavoriteContour, Search, Menu } from "../svg";
import s from "./NavBar.module.scss";
import CartContext from "../../context/CartContext";

const NavigatorBar = () => {
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;
  const { favorite } = useContext(CartContext);
  const favoriteItems = favorite?.favoriteItems;

  const [showMenu, SetShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          {!showMenu && <Menu />}
        </button>
        {!showMenu && (
          <div className={s.logo}>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={100} height={70} />

              {/* <Image src="/logo3.jpg" alt="logo" width={100} height={70} /> */}
            </Link>
          </div>
        )}
      </div>

      <div className={showMenu ? "active" : "mobile_background"}>
        <div className={showMenu ? "activeContent" : "mobilemenu_content"}>
          <span className={s.showMenu_cansel} onClick={() => onShowMenu()}>
            Закрити
          </span>
          <CategoriesList onClick={onShowMenu} />
        </div>
      </div>

      {!showMenu && (
        <>
          <ul className={s.header_user__list}>
            <li className={s.header_user__item}>
              <button onClick={handleOpen}>
                <Search className={s.header_icon} />
              </button>
            </li>
            <li className={s.header_user__item}>
              <Link href="/favorite" className={s.header_icon_count}>
                <FavoriteContour className={s.header_icon} />

                <p className={s.basket_count}>{favoriteItems?.length || 0}</p>
              </Link>
            </li>
            <li className={s.header_user__item}>
              <Link href="/basket" className={s.header_icon_count}>
                <Basket className={s.header_icon} />
                <p className={s.basket_count}>{cartItems?.length || 0}</p>
              </Link>
            </li>
          </ul>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-search-balloon"
            aria-describedby="search balloon composition by world"
          >
            <Box className={s.header_nav__modal}>
              <SearchInput />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
};

export default NavigatorBar;
