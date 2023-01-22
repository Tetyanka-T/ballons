import Link from "next/link";
import { useState } from "react";
import { Cansel, Menu, Select } from "../svg";
// import Container from "../Container/Container";
import s from "./CategoriesList.module.scss";
import common from "../../styles/common.module.scss";

const CategoriesList = () => {
  const [showMenu, SetShowMenu] = useState(false);
  const [baby, SetBaby] = useState(false);
  const [birthDay, SetBirthDay] = useState(false);

  const onShowMenu = () => {
    SetShowMenu(true);
    toggleMenu();
  };
  const toggleMenu = () => {
    showMenu ? SetShowMenu(false) : SetShowMenu(true);
  };

  const onShowBaby = () => {
    SetBaby(true);
    toggleBaby();
  };
  const toggleBaby = () => {
    baby ? SetBaby(false) : SetBaby(true);
  };

  const onShowBirthDays = () => {
    SetBaby(true);
    toggleBirthDays();
  };
  const toggleBirthDays = () => {
    birthDay ? SetBirthDay(false) : SetBirthDay(true);
  };

  return (
    <div>
      <button onClick={() => onShowMenu()} className={s.showMenu}>
        {showMenu === false && <Menu />}
        {showMenu === true && <Cansel />}
      </button>
      {showMenu && (
        <ul className={s.categories_list}>
          <li className={s.categories_list__item}>
            <Link href="/categories">Всі композиції з кульок</Link>
          </li>
          <li className={s.categories_list__item}>
            <Link href="/categories/gender-party">Gender party</Link>
          </li>
          <li className={s.categories_list__item}>
            <button onClick={() => onShowBaby()} className={s.button_select}>
              Виписка з пологового будинку
              <Select className={s.button_baby__icon} />
            </button>
            {baby && (
              <ul className={s.categories_listBaby}>
                <li className={s.categories_listBaby__item}>
                  <Link href="/categories/baby">Всі</Link>
                </li>
                <li className={s.categories_listBaby__item}>
                  <Link href="/categories/baby/girl">Для дівчинки</Link>
                </li>
                <li className={s.categories_listBaby__item}>
                  <Link href="/categories/baby/boy">Для хлопчика</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={s.categories_list__item}>
            <button
              onClick={() => onShowBirthDays()}
              className={s.button_select}
            >
              День народження
              <Select className={s.button_birthDay__icon} />
            </button>
            {birthDay && (
              <ul className={s.categories_listBirtDay}>
                <li className={s.categories_listBirtDay__item}>
                  <Link href="/categories/birthday">Всі</Link>
                </li>
                <li className={s.categories_listBirtDay__item}>
                  <Link href="/categories/birthday/first">
                    Перший день народження
                  </Link>
                </li>
                <li className={s.categories_listBirtDay__item}>
                  <Link href="/categories/birthday/girls">Для дівчинки</Link>
                </li>
                <li className={s.categories_listBirtDay__item}>
                  <Link href="/categories/birthday/boys">Для хлопчика</Link>
                </li>
                <li className={s.categories_listBirtDay__item}>
                  <Link href="/categories/birthday/she">Для неї</Link>
                </li>
                <li className={s.categories_listBirtDay__item}>
                  <Link href="/categories/baby/he">Для нього</Link>
                </li>
              </ul>
            )}
          </li>
          <li className={s.categories_list__item}>
            <Link href="/categories/photo-zone">Фотозони</Link>
          </li>
          <li className={s.categories_list__item}>
            <Link href="/categories/thematics">Тематичні свята</Link>
          </li>
          <li className={s.categories_list__item}>
            <Link href="/categories/design">Оформлення фасадів</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default CategoriesList;
