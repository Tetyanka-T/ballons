import Head from "next/head";
import Novigation from "../components/Navigation/Novigation";
import common from "../styles/common.module.scss";
import s from "../styles/PaymentDelivery.module.scss";
import Image from "next/image";

export default function PaymentPage() {
  return (
    <>
      <Head>
        <title>Оплата і доставка</title>
      </Head>

      <main className={common.container}>
        <Novigation section="Оплата і доставка" />

        <h1 className={common.section_title}>Оплата і доставка</h1>
        <div className={s.payment_section}>
          <div className={s.delivery_car}>
            <Image
              src="/car2.jpg"
              alt="delivery car"
              width={290}
              height={150}
            />
          </div>
          <p>
            При підтвердженні замовлення, клієнт отримує смс-повідомлення з
            реквізитами для оплати. Інтернет-магазин працює при умові{" "}
            <span>повної 100% оплати на карту банку.</span> Час опрацювання
            замовлень: <span>щодня з 9:00 до 18:00.</span>
          </p>
          <p>
            <span>Звертаємо вашу увагу,</span> що точний час виконання
            замовлення буде залежати від моменту його оформлення та складності.
            Замовлення, створене на сайті в неробочий час, буде опрацьовано{" "}
            <span>не раніше 9:00 години наступного дня.</span> Термінові питання
            вирішуються індивідуально. У разі необхідності доставки, її вартість
            буде додана до рахунку відповідно до тарифів, наведених нижче.
          </p>
          <p>
            Доставка по місту здійснюється <span>щодня з 06:00 до 21:00.</span>{" "}
            Доступний час можна обрати при формуванні замовлення у пункті
            «Доставка». У разі термінових замовлень питання вирішуються
            індивідуально.
          </p>
          <p className={s.delivery_list_title}>
            Розрахунок приблизної вартості доставки по місту:
          </p>
          <ul className={s.delivery_list}>
            <li>Металургійний район: 70-150 грн;</li>
            <li>Саксаганський район: 150-300 грн;</li>
            <li>Довгинцівський район: 100-250 грн;</li>
            <li>Інгулецький район: 200-1000 грн;</li>
            <li>Центрально-Міський район: 150-300 грн;</li>
            <li>Покровський район: 250-400 грн;</li>
            <li>Тернівський район: 500-1000 грн.</li>
          </ul>
          <p>
            <span>Самовивіз</span> замовлення можливий за адресою магазину: м.
            Кривий Ріг, проспект Металургів, 20.
          </p>
          <p>
            <span>Важливо:</span> залишайтеся на зв’язку, якщо очікуєте
            доставку, кур’єр може привезти замовлення в будь-який час із
            обраного проміжку.
          </p>
        </div>
      </main>
    </>
  );
}
