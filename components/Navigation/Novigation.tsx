import Link from "next/link";
import { Home, NextPage } from "../svg";
import s from "./Novigation.module.scss";

interface Props {
  section: string;
  category?: string;
  linkSection?: string;
  linkCategory?: string;
  composition?: string;
}

const Novigation = (propsIn: Props) => {
  const novigator = {...propsIn}
  return (
    <ul className={s.categories_list}>
      <li>
        <Link href="/" aria-label="перейти на головну сторінку">
        <Home />
        </Link>
      </li>
      <li>
        <NextPage />
      </li>
      <li>
        <a href={novigator.linkSection} aria-label="повернутися до основного розділу">
        {novigator.section}
        
        </a>
      </li>
      {novigator.category && (
        <li>
          <NextPage />
      </li>
      )}
           <li>
        <a href={novigator.linkCategory} aria-label="перейти до розділу підрозділу">
        {novigator.category}
        </a>
      </li>
        {novigator.composition && (
        <li>
          <NextPage />
      </li>
      )}
        <li>{novigator.composition}</li>
    </ul>
  );
};

export default Novigation;
