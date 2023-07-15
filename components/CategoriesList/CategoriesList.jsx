import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Select } from "../svg";
import s from "./CategoriesList.module.scss";

const CategoriesList = ({ onClick }) => {
  const [baby, SetBaby] = useState(false);
  const [birthDay, SetBirthDay] = useState(false);
  const [thematics, SetThematics] = useState(false);

  const onShowBaby = () => {
    SetBaby(true);
    toggleBaby();
  };
  const toggleBaby = () => {
    baby ? SetBaby(false) : SetBaby(true);
  };

  const onShowBirthDays = () => {
    SetBirthDay(true);
    toggleBirthDays();
  };
  const toggleBirthDays = () => {
    birthDay ? SetBirthDay(false) : SetBirthDay(true);
  };

  const onShowThematics = () => {
    SetThematics(true);
    toggleThematics();
  };
  const toggleThematics = () => {
    thematics ? SetThematics(false) : SetThematics(true);
  };

  return (
    <div className={s.categoriesList__container}>
      <div className={s.logo_container}>
        <Image src="/logo.png" alt="logo" width={100} height={70} />
      </div>

      <ul className={s.categories_list}>
        {/* <li className={s.categories_list__item} onClick={() => onClick()}>
          <Link href="/categories">Дивитись всі композиції</Link>
        </li> */}
        <li className={s.categories_list__item} onClick={() => onClick()}>
          <Link href="/categories/gender-party">Gender party</Link>
        </li>
        <li className={s.categories_list__item}>
          <button onClick={() => onShowBaby()} className={s.button_select}>
            Виписка з пологового будинку
            <Select className={s.button_baby__icon} />
          </button>
          {baby && (
            <ul className={s.categories_listBaby}>
              <li
                className={s.categories_listBaby__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/baby">Дивитись все</Link>
              </li>
              <li
                className={s.categories_listBaby__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/baby/girl">Для дівчинки</Link>
              </li>
              <li
                className={s.categories_listBaby__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/baby/boy">Для хлопчика</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={s.categories_list__item}>
          <button onClick={() => onShowBirthDays()} className={s.button_select}>
            День народження
            <Select className={s.button_birthDay__icon} />
          </button>
          {birthDay && (
            <ul className={s.categories_listBirthDay}>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday">Дивитись все</Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/first">
                  Перший День народження
                </Link>
              </li>
              <li className={s.categories_listBirthDay__item}>
                <Link
                  href="/categories/birthday/girls"
                  onClick={() => onClick()}
                >
                  Для дівчинки
                </Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/boys">Для хлопчика</Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/she">Для неї</Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/he">Для нього</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={s.categories_list__item} onClick={() => onClick()}>
          <Link href="/categories/photozone">Фотозони</Link>
        </li>
        {/* <li className={s.categories_list__item}>
          <button onClick={() => onShowThematics()} className={s.button_select}>
            Тематичні свята
            <Select className={s.button_thematics__icon} />
          </button>
          {thematics && (
            <ul className={s.categories_listThematics}>
              <li
                className={s.categories_listThematics__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/thematics">Дивитись все</Link>
              </li>
              <li
                className={s.categories_listThematics__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/thematics/valentine's-day">
                  День Закоханих
                </Link>
              </li>
              <li
                className={s.categories_listThematics__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/thematics/hen-party">Дівич-вечір</Link>
              </li>
              <li
                className={s.categories_listThematics__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/thematics/wedding">Весілля</Link>
              </li>
              <li
                className={s.categories_listThematics__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/thematics/halloween">Хелловін</Link>
              </li>
              <li
                className={s.categories_listThematics__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/thematics/new-year">Новий Рік</Link>
              </li>
            </ul>
          )}
        </li> */}
        <li className={s.categories_list__item} onClick={() => onClick()}>
          <Link href="/categories/facades">Оформлення фасадів</Link>
        </li>
      </ul>
    </div>
  );
};
export default CategoriesList;
