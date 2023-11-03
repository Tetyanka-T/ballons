"use client";
import { useState } from "react";
import { Call, Viber, Telegram, Instagram2 } from "../svg";
import s from "./NoFindComposition.module.scss";
import Link from "next/link";
import { Instagram } from "../svg";

const NoFindComposition = () => {
  const [showPhone, SetShowPhone] = useState(false);
  const onShowPhone = () => {
    SetShowPhone(true);
    toggleShowPhone();
  };
  const toggleShowPhone = () => {
    showPhone ? SetShowPhone(false) : SetShowPhone(true);
  };
  return (
    <div className={s.find}>
      <p className={s.find_text}>
        Якщо Ви не знайшли композицію на нашому сайті, яка Вам припала до душі,
        ми можемо зібрати будь-яку за Вашим побажанням та бюджетом.
      </p>
      <button className={s.find_button} onClick={() => onShowPhone()}>
        Зв&apos;яжіться з нами
      </button>
      {showPhone && (
        <ul className={s.find_list}>
          <li className={s.find_list__item}>
            <Call className={s.find_list__item__call} />
            <ul className={s.find_list__item__call__list}>
              <li>
                <a href="tel:+380968118244">+380968118244</a>
              </li>
              <li>
                <a href="tel:+380732036144">+380732036144</a>
              </li>
            </ul>
          </li>
          <li className={s.find_list__item}>
            <Viber className={s.find_list__item__call} />
            <a href="viber://chat?number=%2B380968118244">Посилання на Viber</a>
          </li>
          <li className={s.find_list__item}>
            <Telegram className={s.find_list__item__call} />
            <a href="https://t.me/+380968118244">Посилання на Telegram</a>
          </li>
          <li className={s.find_list__item}>
            <Instagram2 className={s.find_list__item__call} />
            <a
              href="https://www.instagram.com/veselavutivka/?igshid=13ixk4qj193va"
              target="_blank"
              rel="noreferrer"
            >
              Посилання на Instagram
            </a>
          </li>
        </ul>
      )}
      <ul className={s.footer_list}>
        <li className={s.footer_list__item}>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li className={s.footer_list__item}>
          <Link href="/payment-delivery">Оплата і доставка</Link>
        </li>
        <li className={s.footer_list__item}>
          <Link href="/about-us">Про нас</Link>
        </li>
        <li className={s.footer_list__item}>
          <a
            href="https://www.instagram.com/veselavutivka/?igshid=13ixk4qj193va"
            target="_blank"
            rel="noreferrer"
          >
            Підписатися
          </a>
          <Instagram />
        </li>
      </ul>
    </div>
  );
};

export default NoFindComposition;
