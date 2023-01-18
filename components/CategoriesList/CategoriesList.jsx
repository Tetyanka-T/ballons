import Link from "next/link";
import { useState } from "react";
import s from "./CategoriesList.module.scss";

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

  return (
    <div>
      <button onClick={() => onShowMenu()}>тиц</button>
      {showMenu && (
        <ul className={s.categories_list}>
          <li>
            <Link href="/categories/gender-party">Gender party</Link>
          </li>
          <li>
            <button onClick={() => SetBaby(true)}>
              Виписка з пологового будинку
            </button>
            {baby && (
              <ul>
                <li>
                  <Link href="/categories/baby">Всі</Link>
                </li>
                <li>
                  <Link href="/categories/baby/boy">Хлопчик</Link>
                </li>
                <li>
                  <Link href="/categories/baby/girl">Дівчинка</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={() => SetBirthDay(true)}>День народження</button>
            {birthDay && (
              <ul>
                <li>
                  <Link href="/categories/birthday">Всі</Link>
                </li>
                <li>
                  <Link href="/categories/birthday/first">
                    перший день народження
                  </Link>
                </li>
                <li>
                  <Link href="/categories/birthday/girls">для дівчинки</Link>
                </li>
                <li>
                  <Link href="/categories/birthday/boys">для хлопчика</Link>
                </li>
                <li>
                  <Link href="/categories/birthday/she">для неї</Link>
                </li>
                <li>
                  <Link href="/categories/baby/he">для нього</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/categories/photo-zone">Фотозони</Link>
          </li>
          <li>
            <Link href="/categories/thematics">Тематичні свята</Link>
          </li>
          <li>
            <Link href="/categories/design">Оформлення фасадів</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default CategoriesList;
