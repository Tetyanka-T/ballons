import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import style from '../styles/common.module.scss'
import s from '../styles/Contacts.module.scss'

export default function Contacts() {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.container}>
        <Header />
        <div className={style.section}>
        <h2 className={style.section_title}>Контакти</h2>
        <div className={s.contacts_container}>
            <ul>
                <li>
                    <h3>Адреса:</h3>
                    <p>Кривий Ріг, проспект Металургів, б.20 </p>
                </li>
                <li>
                    <h3>Телефон:</h3>
                    <p>0968118244</p>
                </li>
                <li>
                    <h3>Графік роботи:</h3>
                    <p>Пн-Сб: 9.00 - 18.00</p>
                    <p>Вс: 9.00 - 15.00</p>
                </li>
            </ul>
        <div className={s.contacts_map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.010287963228!2d33.394911155599495!3d47.897486177353585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40db2127583a03a1%3A0x8e2ada953ee178c!2z0JLQtdGB0LXQu9CwINCS0LjRgtGW0LLQutCw!5e0!3m2!1suk!2sua!4v1667226435133!5m2!1suk!2sua" width="600" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
      
        </div>
        </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}