import Head from "next/head";
import Image from "next/image";
import common from "../../../../styles/common.module.scss";
import Novigation from "../../../../components/Navigation/Novigation";
import ComeBackButton from "../../../../components/ComeBackButton/ComeBackButton";
import s from "../../../../components/CardDescription/CardDescription.module.scss";
import { getAllBalloonsIds, getBalloonById } from "../../../../lib/balloons";
import BuyButton from "../../../../components/BuyButton/BuyButton";
import FavoriteButton from "../../../../components/FavoriteBatton/FavoriteButton";
export const getStaticPaths = async () => {
  const paths = await getAllBalloonsIds();

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const balloon = await getBalloonById(params.id);
  return {
    props: {
      balloon: balloon,
    },
  };
};

// interface Balloon {
//   imgSrc: string;
//   name: string;
//   price: number;
//   id: URL;

// }

const CardId = ({ balloon }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="композиції із повітряних кульок, оформлення свята, Кривий Ріг, перший день народження, для хлопчика, для дівчинки, кульки"
        ></meta>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/balloon.svg" />
      </Head>
      <main className={common.container}>
        <Novigation
          section="День народження"
          category="1-й День народження"
          composition="Композиція"
          linkSection="/categories/birthday"
          linkCategory="/categories/birthday/first"
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
                <BuyButton balloon={balloon} />
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
