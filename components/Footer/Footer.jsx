import Link from "next/link";
import { Instagram } from "../svg";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
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
      <div className={s.footer_rules}>
        <p>&#169; 2023</p>
        <a href="" className={s.footer_rules__link}>
          Правила використання сайту
        </a>
      </div>
    </div>
  );
};

export default Footer;
