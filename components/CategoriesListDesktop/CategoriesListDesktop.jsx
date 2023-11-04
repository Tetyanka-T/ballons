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
      {/* <li className={s.categories_list__item}>
        <Link href="/categories">Дивитись всі композиції</Link>
      </li> */}
      <li className={s.categories_list__item}>
        <Link
          href="/categories/gender-party"
          aria-label="перейти до розділу Гендер пати"
        >
          Gender party
        </Link>
      </li>
      <li className={s.categories_list__item}>
        <button
          onClick={() => onShowBaby()}
          className={s.button_select}
          aria-label="відкрити підрозділи розділу Виписка з пологового будинку"
        >
          Виписка з пологового будинку
          <Select className={s.button_baby__icon} />
        </button>
        {baby && (
          <ul className={s.categories_listBaby}>
            <li className={s.categories_listBaby__item}>
              <Link
                href="/categories/baby"
                onClick={() => SetBaby(false)}
                aria-label="перейти до розділу Виписка з пологового будинку"
              >
                Дивитись все
              </Link>
            </li>
            <li className={s.categories_listBaby__item}>
              <Link
                href="/categories/baby/girl"
                onClick={() => SetBaby(false)}
                aria-label="перейти до розділу Виписка з пологового будинку для дівчинки"
              >
                Для дівчинки
              </Link>
            </li>
            <li className={s.categories_listBaby__item}>
              <Link
                href="/categories/baby/boy"
                onClick={() => SetBaby(false)}
                aria-label="перейти до розділу Виписка з пологового будинку для хлопчика"
              >
                Для хлопчика
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li className={s.categories_list__item}>
        <button
          onClick={() => onShowBirthDays()}
          className={s.button_select}
          aria-label="перейти до підрозділів розділу День народження"
        >
          День народження
          <Select className={s.button_birthDay__icon} />
        </button>
        {birthDay && (
          <ul className={s.categories_listBirthDay}>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link
                href="/categories/birthday"
                aria-label="перейти до розділу День народження"
              >
                Дивитись все
              </Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link
                href="/categories/birthday/first"
                aria-label="перейти до розділу Перший день народження"
              >
                Перший День народження
              </Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link
                href="/categories/birthday/girls"
                aria-label="перейти до розділу День народження для дівчинки"
              >
                Для дівчинки
              </Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link
                href="/categories/birthday/boys"
                aria-label="перейти до розділу День народження для хлопчика"
              >
                Для хлопчика
              </Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link
                href="/categories/birthday/she"
                aria-label="перейти до розділу День народження для неї"
              >
                Для неї
              </Link>
            </li>
            <li
              className={s.categories_listBirthDay__item}
              onClick={() => SetBirthDay(false)}
            >
              <Link
                href="/categories/birthday/he"
                aria-label="перейти до розділу День народження для нього"
              >
                Для нього
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li className={s.categories_list__item}>
        <Link
          href="/categories/photozone"
          aria-label="перейти до розділу Фотозони"
        >
          Фотозони
        </Link>
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
      </li> */}
      <li className={s.categories_list__item}>
        <Link href="/categories/facades" aria-label="перейти до розділу Фасади">
          Оформлення фасадів
        </Link>
      </li>
    </ul>
  );
};
export default CategoriesListDesktop;
