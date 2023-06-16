import Link from "next/link";
import { useState } from "react";
import { Select } from "../svg";
import s from "./CategoriesListDesktop.module.scss";

const CategoriesListDesktop = () => {
  const [baby, SetBaby] = useState(false);
  const [birthDay, SetBirthDay] = useState(false);
  const [thematics, SetThematics] = useState(false);

  const onShowBaby = () => {
    SetBaby(true);
    SetBirthDay(false);
    SetThematics(false);
    toggleBaby();
  };
  const toggleBaby = () => {
    baby ? SetBaby(false) : SetBaby(true);
  };

  const onShowBirthDays = () => {
    SetBirthDay(true);
    SetBaby(false);
    SetThematics(false);
    toggleBirthDays();
  };
  const toggleBirthDays = () => {
    birthDay ? SetBirthDay(false) : SetBirthDay(true);
  };

  const onShowThematics = () => {
    SetThematics(true);
    SetBaby(false);
    SetBirthDay(false);
    toggleThematics();
  };
  const toggleThematics = () => {
    thematics ? SetThematics(false) : SetThematics(true);
  };

  return (
    <ul className={s.categories_list}>
      <li className={s.categories_list__item}>
        <Link href="/categories">Дивитись всі композиції</Link>
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
              <Link href="/categories/baby" onClick={() => SetBaby(false)}>
                Дивитись все
              </Link>
            </li>
            <li className={s.categories_listBaby__item}>
              <Link href="/categories/baby/girl" onClick={() => SetBaby(false)}>
                Для дівчинки
              </Link>
            </li>
            <li className={s.categories_listBaby__item}>
              <Link href="/categories/baby/boy" onClick={() => SetBaby(false)}>
                Для хлопчика
              </Link>
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
              onClick={() => SetBirthDay(false)}
            >
              <Link href="/categories/birthday">Дивитись все</Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link href="/categories/birthday/first">
                Перший День народження
              </Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link href="/categories/birthday/girls">Для дівчинки</Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link href="/categories/birthday/boys">Для хлопчика</Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link href="/categories/birthday/she">Для неї</Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link href="/categories/birthday/he">Для нього</Link>
            </li>
          </ul>
        )}
      </li>
      <li className={s.categories_list__item}>
        <Link href="/categories/photo-zone">Фотозони</Link>
      </li>
      <li className={s.categories_list__item}>
        <button onClick={() => onShowThematics()} className={s.button_select}>
          Тематичні свята
          <Select className={s.button_thematics__icon} />
        </button>
        {thematics && (
          <ul className={s.categories_listThematics}>
            <li
              className={s.categories_listThematics__item}
              onClick={() => SetThematics(false)}
            >
              <Link href="/categories/thematics">Дивитись все</Link>
            </li>
            <li
              className={s.categories_listThematics__item}
              onClick={() => SetThematics(false)}
            >
              <Link href="/categories/thematics/valentine's-day">
                День Закоханих
              </Link>
            </li>
            <li
              className={s.categories_listThematics__item}
              onClick={() => SetThematics(false)}
            >
              <Link href="/categories/thematics/hen-party">Дівич-вечір</Link>
            </li>
            <li
              className={s.categories_listThematics__item}
              onClick={() => SetThematics(false)}
            >
              <Link href="/categories/thematics/wedding">Весілля</Link>
            </li>
            <li
              className={s.categories_listThematics__item}
              onClick={() => SetThematics(false)}
            >
              <Link href="/categories/thematics/halloween">Хелловін</Link>
            </li>
            <li
              className={s.categories_listThematics__item}
              onClick={() => SetThematics(false)}
            >
              <Link href="/categories/thematics/new-year">Новий Рік</Link>
            </li>
          </ul>
        )}
      </li>
      <li className={s.categories_list__item}>
        <Link href="/categories/design">Оформлення фасадів</Link>
      </li>
    </ul>
  );
};
export default CategoriesListDesktop;
