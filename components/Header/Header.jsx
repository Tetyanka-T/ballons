import Link from "next/link";
import NavBar from "../NavBar/NavBar";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_menu}>
        <ul className={s.header_info__list}>
          <li className={s.header_info__list__item}>
            <Link href="/payment-delivery">Оплата і доставка</Link>
          </li>
          <li className={s.header_info__list__item}>
            <Link href="/contacts">Контакти</Link>
          </li>
          <li className={s.header_info__list__item}>
            <Link href="/about-us">Про нас</Link>
          </li>
        </ul>
      </div>

      <div className={s.order_message}>
        <p className={s.order}>замовлення на сайті цілодобово</p>
        <p className={s.order}>оброблення замовлень з 8.00 до 20.00</p>
        <p className={s.order}>без вихідних</p>
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
