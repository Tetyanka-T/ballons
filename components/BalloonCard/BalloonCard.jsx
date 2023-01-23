import { Card } from "flowbite-react";
import Image from "next/image";
import photo1 from "../../public/photo_1.jpg";
import photo2 from "../../public/photo_2.jpg";
import photo3 from "../../public/photo_3.jpg";
import { Basket, FavoriteContour } from "../svg";
import s from "./BalloonCard.module.scss";

const BalloonCard = () => {
  return (
    <ul className={s.list}>
      <li className={s.card_container}>
        <Image src={photo1} alt="" width={320} height={80} />
        <h3 className={s.card_title}>
          Супер-пупер композиція
          <FavoriteContour className={s.card_icon__fav} />
        </h3>
        <div className={s.card_decr}>
          <p className={s.card_price}>2000 UAH</p>
          <button className={s.card_basket}>
            Хочу
            <Basket className={s.card_basket__icon} />
          </button>
        </div>
      </li>

      <li className={s.card_container}>
        <Image src={photo2} alt="" width={320} height={80} />
        <h3 className={s.card_title}>
          Супер-пупер композиція
          <FavoriteContour className={s.card_icon__fav} />
        </h3>
        <div className={s.card_decr}>
          <p className={s.card_price}>2000 UAH</p>
          <button className={s.card_basket}>
            Хочу
            <Basket className={s.card_basket__icon} />
          </button>
        </div>
      </li>

      <li className={s.card_container}>
        <Image src={photo3} alt="" width={320} height={80} />
        <h3 className={s.card_title}>
          Супер-пупер композиція
          <FavoriteContour className={s.card_icon__fav} />
        </h3>
        <div className={s.card_decr}>
          <p className={s.card_price}>2000 UAH</p>
          <button className={s.card_basket}>
            Хочу
            <Basket className={s.card_basket__icon} />
          </button>
        </div>
      </li>

      <div className={s.card_container}>
        <Image src={photo1} alt="" width={320} height={80} />
        <h3 className={s.card_title}>
          Супер-пупер композиція
          <FavoriteContour className={s.card_icon__fav} />
        </h3>
        <div className={s.card_decr}>
          <p className={s.card_price}>2000 UAH</p>
          <button className={s.card_basket}>
            Хочу
            <Basket className={s.card_basket__icon} />
          </button>
        </div>
      </div>
    </ul>
  );
};

export default BalloonCard;
