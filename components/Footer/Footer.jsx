import Link from "next/link";
import { Instagram } from "../svg";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <p>&#169; 2023</p>
      <a href="" className={s.footer_rules__link}>
        Правила використання сайту
      </a>
    </div>
  );
};

export default Footer;
