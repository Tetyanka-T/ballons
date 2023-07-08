import Link from "next/link";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_link}>
        <p>&#169; {new Date().getFullYear()}</p>
        <Link href="/rules" className={s.footer_rules__link}>
          Правила використання сайту
        </Link>
      </div>
      <a
        className={s.made_by}
        href="https://www.linkedin.com/in/tetiana-tupalo-86510b219"
        target="_blanket"
      >
        Розробник
      </a>
    </div>
  );
};

export default Footer;
