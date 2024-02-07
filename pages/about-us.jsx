import Head from "next/head";
import Image from "next/image";
import style from "../styles/common.module.scss";
import s from "../styles/AboutUsPage.module.scss";
import Novigation from "../components/Navigation/Novigation";

export default function AboutUs() {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, історія створення, власники магазину"
        ></meta>
        <title>Засновники магазину Весела витівка у Кривому Розі</title>
        <meta
          name="description"
          content="Весела витівка - інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={style.container}>
        <Novigation section="Про нас" />
        <h2 className={style.section_title}>Про нас</h2>
        <p className={s.about_text}>
          Ще до відкриття офлайн магазину у Кривому Розі, ми вивчали цю нішу. Чи
          є щось подібне у нас в місті? Наскільки користується попитом така
          продукція? Чи буде вигідно розпочати такий бізнес?
        </p>
        <p className={s.about_text}>
          Питань було чи мало, хвилювань також. Але, не зважаючи на всілякі
          перешкоди, враховуючи всі «за» і «проти», ми вирішили спробувати. І в
          2019 році відкриваємо Перший в місті party-shop.
        </p>
        <div className={s.about_photo_we}>
          <Image
            src="/we.jpg"
            alt="Власники магазину"
            width={290}
            height={150}
          />
        </div>

        <p className={s.about_text}>
          Поступово, з діяльністю магазину, ми розвивали сторінку в інстаграм.
          Там ми більш зорієнтували свою діяльність на виготовленні композицій з
          повітряних кульок. Хотілося створювати щось незвичне, цікаве, не таке
          як в усіх.
        </p>
        <ul className={s.about_photo_madecomposition_list}>
          <li>
            <Image
              src="/made.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/made2.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/made4.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/made3.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
        </ul>
        <p className={s.about_text}>
          Своєю працьовитістю, відповідальністю та жагою до розвитку ми
          залучилися вашою підтримкою, довірою, а головне - любовʼю.
        </p>
        <p className={s.about_text}>
          Кількість замовлень зростала кожного місяця. Клієнтів становилася все
          більше. Наразі це майже <span>10 тисяч.</span>
        </p>
        <p className={s.about_text}>
          Варіантів композицій нарахувалося безліч, показати всі – неможливо
          фізично, тому, для зручності людей, які цінують свій час, ми вирішили
          створити інтернет-магазин, в якому клієнт самостійно обере для себе ті
          кульки, які йому до вподоби.
        </p>
        <p className={s.about_text}>
          Наш інтернет-магазин - це про гарний настрій, позитивні емоції та
          найкращі композиції з повітряних кульок.
        </p>
        <p className={s.about_text}>
          Ми маємо стильні, оригінальні ідеї, які не залишать без уваги жодного
          клієнта.
        </p>
        <p className={s.about_text}>
          Ми займаємось улюбленою справою, тому з легкістю підберемо сучасну
          композицію, враховуючи вік, стать та смаки іменинника.
        </p>
        <ul className={s.about_photo_madecomposition_list}>
          <li>
            <Image
              src="/delivery.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/delivery2.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/delivery3.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
          <li>
            <Image
              src="/delivery4.jpg"
              alt="Виготовлення композиції"
              width={290}
              height={150}
            />
          </li>
        </ul>
        <p className={s.about_text}>Нам довіряють ваші посмішки.</p>
      </main>
    </div>
  );
}
