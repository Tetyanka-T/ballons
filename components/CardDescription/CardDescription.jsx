import Image from "next/image";
import { Basket, FavoriteContour, FavoriteSelect } from "../svg";
import photo1 from "../../public/photo_1.jpg";
import s from "./CardDescription.module.scss";

const CardDescription = () => {
  return (
    <div className={s.cardDescription_container}>
      <Image
        src={photo1}
        alt=""
        width={300}
        height={200}
        className={s.cardDescription_image}
      />
      <button className={s.cardDescription_button__favorite}>
        <FavoriteContour className={s.cardDescription_button__icon} />
        <FavoriteSelect className={s.cardDescription_button__icon__select} />
      </button>
      <div>
        <h3 className={s.cardDescription_title}>Супер-пупер композиція</h3>
        <p className={s.cardDescription_article}>арт.№</p>
        <p className={s.cardDescription_descriptionComposition}>
          Композиція для дівчинки на День народження складається з ...
        </p>
        <div className={s.cardDescription_price_container}>
          <p className={s.cardDescription_price}>2000 грн.</p>
          <button className={s.cardDescription_button__basket}>
            Купити
            <Basket className={s.cardDescription_button__icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
