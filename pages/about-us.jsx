import Head from "next/head";
import Image from "next/image";
import style from "../styles/common.module.scss";
import s from "../styles/AboutUsPage.module.scss";
import Novigation from "../components/Navigation/Novigation";

export default function AboutUs() {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.container}>
        <Novigation section="Про нас" />
        <h2 className={style.section_title}>Про нас</h2>
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
        <p className={s.about_text}>Нам довіряють ваші посмішки.</p>
      </main>
    </div>
  );
}
