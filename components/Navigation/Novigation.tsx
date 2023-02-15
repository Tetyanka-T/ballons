import Link from "next/link";

import { Home, NextPage } from "../svg";
import s from "./Novigation.module.scss";

interface Props {
  section: string;
  category?: string;
  link?: string;
}

const Novigation = (propsIn: Props) => {
  const novigator = {...propsIn}
  return (
    <ul className={s.categories_list}>
      <li>
        <Link href="/">
        <Home />
        </Link>
        
      </li>
      <li>
        <NextPage />
      </li>
      <li>
        <a href={novigator.link}>
        {novigator.section}
        </a>
      </li>
      {novigator.category && (
        <li>
          <NextPage />

        
        
      </li>
      )}
        <li>{novigator.category}</li>
    </ul>
  );
};

export default Novigation;
