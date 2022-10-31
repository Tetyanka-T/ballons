import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.header}>
      <a href="/index.tsx">Logo</a>
      <ul className={s.header_user__list}>
        <li className={s.header_user__item}>
          <a>Кабінет</a>
        </li>
        <li className={s.header_user__item}>
          <a>Вподобайки</a>
        </li>
        <li className={s.header_user__item}>
          <a>Кошик</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
