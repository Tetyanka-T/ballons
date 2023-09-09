import Head from "next/head";
import Image from "next/image";
import common from "../../../styles/common.module.scss";
import Novigation from "../../../components/Navigation/Novigation";
import ComeBackButton from "../../../components/ComeBackButton/ComeBackButton";
import s from "../../../components/CardDescription/CardDescription.module.scss";
import { getAllBalloonsIds, getBalloonById } from "../../../lib/balloons";
import FavoriteButton from "../../../components/FavoriteBatton/FavoriteButton";
import Balloon from "../../../Interface/interface";

type Params = {
	params: {
		id: string
	}
}

export const getStaticPaths = async () => {
  const paths = await getAllBalloonsIds();

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params } : Params ) => {
  const balloon = await getBalloonById(params.id);
  return {
    props: {
      balloon: balloon,
    },
  };
};


const CardId = ({ balloon }: {balloon: Balloon}) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, доставка Кривий Ріг, прикрашання фасаду магазинів, кафе, декорація, на відкриття магазину, гірлянда, арка з кульок, каркас"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>
      <main className={common.container}>
        <Novigation
          section="Оформлення фасадів"
          composition="Композиція"
          linkSection="/categories/facades"
        />
        <ComeBackButton />
        <div className={s.cardDescription_container}>
          <div className={s.cardDescription_photo_container}>
            <Image
              src={balloon.imgSrc}
              alt=""
              width={200}
              height={100}
              className={s.cardDescription_image}
            />
            <div className={s.transparent}></div>
          </div>

          <div>
            <div className={s.cardDescription_fav_container}>
              <h3 className={s.cardDescription_title}>{balloon.name}</h3>
              <div className={s.cardDescription_button_fav}>
                <FavoriteButton balloon={balloon} />
              </div>
            </div>

            <p className={s.cardDescription_article}>арт.№ {balloon.code}</p>

            <p className={s.cardDescription_descriptionComposition}>
              {balloon.description}
            </p>

            <div className={s.cardDescription_price_container}>
              <p className={s.cardDescription_price}>{balloon.price} грн.</p>
              <div className={s.cardDescription_button_buy}>
                <a
                  href="tel:+380968118244"
                  className={s.list_button_consultation}
                >
                  Отримати консультацію
                </a>
              </div>
            </div>
            <p className={s.cardDescription_inform}>
              *Просимо звернути увагу: колір товару може відрізнятися в
              залежності від освітлення та налаштувань Вашого екрану.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardId;