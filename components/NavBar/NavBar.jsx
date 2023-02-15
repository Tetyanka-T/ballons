import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Modal, Box } from "@mui/material";
import SearchInput from "../Search/SearchInput";
import { Basket, FavoriteContour, Search, Menu } from "../svg";
import s from "./NavBar.module.scss";

const NavigatorBar = () => {
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
          {showMenu === false && <Menu />}
          {showMenu === true && (
            <span className={s.showMenu_cansel}>Закрити</span>
          )}
        </button>
        {showMenu === false && (
          <div className={s.logo}>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={80} height={80} />
            </Link>
          </div>
        )}
      </div>

      {showMenu === true && <CategoriesList />}

      {showMenu === false && (
        <>
          <ul className={s.header_user__list}>
            <li className={s.header_user__item}>
              <button onClick={handleOpen}>
                <Search className={s.header_icon} />
              </button>
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
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
