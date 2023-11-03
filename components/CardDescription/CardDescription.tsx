import Image from "next/image";
import ComeBackButton from "../ComeBackButton/ComeBackButton";
import BuyButton from "../BuyButton/BuyButton";
import FavoriteButton from "../FavoriteBatton/FavoriteButton";
import s from "./CardDescription.module.scss";
import Balloon from "../../Interface/interface";

const CardDescription = ({ balloon }: {balloon: Balloon}) => {
  return (
    <>
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
    </>
  );
};

export default CardDescription;
