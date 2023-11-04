import Link from "next/link";
import NavBar from "../NavBar/NavBar";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_menu}>
        <ul className={s.header_info__list}>
          <li className={s.header_info__list__item}>
            <Link
              href="/payment-delivery"
              aria-label="перейти до розділу Оплата і доставка"
            >
              Оплата і доставка
            </Link>
          </li>
          <li className={s.header_info__list__item}>
            <Link href="/contacts" aria-label="перейти до розділу Контакти">
              Контакти
            </Link>
          </li>
          <li className={s.header_info__list__item}>
            <Link href="/about-us" aria-label="перейти до розділу Про нас">
              Про нас
            </Link>
          </li>
        </ul>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
