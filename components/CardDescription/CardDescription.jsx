import Image from "next/image";
import { Basket, FavoriteContour } from "../svg";
import photo1 from "../../public/photo_1.jpg";
import s from "./CardDescription.module.scss";

const CardDescription = () => {
  return (
    <div>
      <Image src={photo1} alt="" width={300} height={200} />
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
  );
};

export default CardDescription;
