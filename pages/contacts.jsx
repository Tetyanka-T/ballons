import Head from "next/head";
import Image from "next/image";
import common from "../styles/common.module.scss";
import { Home, Location, Call } from "../components/svg";
import s from "../styles/Contacts.module.scss";
import Novigation from "../components/Navigation/Novigation";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакти</title>
      </Head>

      <main className={common.container}>
        <Novigation section="Контакти" />

        <h1 className={common.section_title}>Контакти</h1>
        <div className={s.contacts_container}>
          <ul className={s.contacts_list}>
            <li className={s.contacts_list__item}>
              <Location className={s.contacts_list__item__location} />
              <p>м.Кривий Ріг, просп. Металургів, б.20</p>
            </li>
            <li className={s.contacts_list__item}>
              <Call className={s.contacts_list__item__call} />
              <ul>
                <li>
                  <a href="tel:+380968118244">+380968118244</a>
                </li>
                <li>
                  <a href="tel:+380732036144">+380732036144</a>
                </li>
              </ul>
            </li>
            <li className={s.contacts_list__item}>
              <Home className={s.contacts_list__item__home} />
              <div>
                <p>Пн-Сб: 9.00 - 17.00</p>
                <p>Вс: 9.00 - 15.00</p>
              </div>
            </li>
            <li className={s.contacts_list__item}>
              <p className={s.contacts_list__item__info}>
                *перед візитом до магазину, дізнайтеся чи ми на місці за
                наданими телефонами
              </p>
            </li>
          </ul>
          <div className={s.contacts_photo}>
            <Image src="/shop.jpg" alt="" width={290} height={250} />
          </div>
        </div>
        <div className={s.contacts_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.010287963228!2d33.394911155599495!3d47.897486177353585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db2127583a03a1%3A0x8e2ada953ee178c!2z0JLQtdGB0LXQu9CwINCS0LjRgtGW0LLQutCw!5e0!3m2!1suk!2sua!4v1667226435133!5m2!1suk!2sua"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
}
