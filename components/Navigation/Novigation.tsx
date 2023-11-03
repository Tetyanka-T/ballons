"use client"
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
        <Link href="/">
        <Home />
        </Link>
      </li>
      <li>
        <NextPage />
      </li>
      <li>
        <a href={novigator.linkSection}>
        {novigator.section}
        </a>
      </li>
      {novigator.category && (
        <li>
          <NextPage />
      </li>
      )}
           <li>
        <a href={novigator.linkCategory}>
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
