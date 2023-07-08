import Head from "next/head";
import Novigation from "../components/Navigation/Novigation";
import common from "../styles/common.module.scss";
import s from "../styles/RulesPage.module.scss";

export default function PaymentPage() {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет магазин виробів із повітряних кульок, оформлення свят"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>

      <main className={common.container}>
        <Novigation section="Правила користування сайтом" />

        <h2 className={common.section_title}>Правила користування сайтом</h2>
        <div className={s.rules_section}>
          <p></p>
          <p></p>
          <p></p>
          <p className={s.delivery_list_title}></p>

          <p></p>
          <p></p>
        </div>
      </main>
    </div>
  );
}
