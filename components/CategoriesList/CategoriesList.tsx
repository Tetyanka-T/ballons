import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Select } from "../svg";
import s from "./CategoriesList.module.scss";

const CategoriesList = ({ onClick }: {onClick: Function} ) => {
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
          <Link href="/categories/gender-party" aria-label="перейти до розділу Гендер пати">Gender party</Link>
        </li>
        <li className={s.categories_list__item}>
          <button onClick={() => onShowBaby()} className={s.button_select} aria-label="відкрити підрозділи розділу Виписка з пологового будинку">
            Виписка з пологового будинку
            <Select className={s.button_baby__icon} />
          </button>
          {baby && (
            <ul className={s.categories_listBaby}>
              <li
                className={s.categories_listBaby__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/baby" aria-label="перейти до розділу Виписка з пологового будинку">Дивитись все</Link>
              </li>
              <li
                className={s.categories_listBaby__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/baby/girl"  aria-label="перейти до розділу Виписка з пологового будинку для дівчинки">Для дівчинки</Link>
              </li>
              <li
                className={s.categories_listBaby__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/baby/boy"  aria-label="перейти до розділу Виписка з пологового будинку для хлопчика">Для хлопчика</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={s.categories_list__item}>
          <button onClick={() => onShowBirthDays()} className={s.button_select}  aria-label="перейти до підрозділів розділу День народження">
            День народження
            <Select className={s.button_birthDay__icon} />
          </button>
          {birthDay && (
            <ul className={s.categories_listBirthDay}>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday" aria-label="перейти до розділу День народження">Дивитись все</Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/first" aria-label="перейти до розділу Перший день народження">
                  Перший День народження
                </Link>
              </li>
              <li className={s.categories_listBirthDay__item} onClick={() => onClick()}>
                <Link
                  href="/categories/birthday/girls"
                  aria-label="перейти до розділу День народження для дівчинки"
                >
                  Для дівчинки
                </Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/boys" aria-label="перейти до розділу День народження для хлопчика">Для хлопчика</Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/she" aria-label="перейти до розділу День народження для неї">Для неї</Link>
              </li>
              <li
                className={s.categories_listBirthDay__item}
                onClick={() => onClick()}
              >
                <Link href="/categories/birthday/he" aria-label="перейти до розділу День народження для нього">Для нього</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={s.categories_list__item} onClick={() => onClick()}>
          <Link href="/categories/photozone" aria-label="перейти до розділу Фотозони">Фотозони</Link>
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
          <Link href="/categories/facades" aria-label="перейти до розділу Фасади">Оформлення фасадів</Link>
        </li>
      </ul>
    </div>
  );
};
export default CategoriesList;
