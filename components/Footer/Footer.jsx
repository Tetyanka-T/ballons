import Link from "next/link";
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <ul>
        <li>
          <Link href="/contacts">Контакти</Link>
        </li>
        <li>
          <Link href="/payment-delivery">Оплата і доставка</Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/veselavutivka/?igshid=13ixk4qj193va"
            target="_blank"
            rel="noreferrer"
          >
            Підписатися
          </a>
        </li>
      </ul>
      <p> &#169; 2022</p>
      <p>Правила використання сайту</p>
    </div>
  );
};

export default Footer;
