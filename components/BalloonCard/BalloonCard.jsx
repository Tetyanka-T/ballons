import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Basket, FavoriteContour, FavoriteSelect } from "../svg";
import s from "./BalloonCard.module.scss";

// interface Balloon {
//   imgSrc: string;
//   name: string;
//   price: number;
//   id: URL;

// }

const BalloonCard = ({ balloon }) => {
  return (
    <>
      {/* <div className={s.card_item__hover}></div> */}
      <div className={s.img_container}>
        <Image
          src={balloon.imgSrc}
          alt="photo composition"
          width={200}
          height={300}
          className={s.img}
          loading="lazy"
        />
        <div className={s.transparent}></div>
      </div>

      <div className={s.cart_description}>
        <h3 className={s.card_title}>{balloon.name}</h3>

        {/* <div className={s.favorite_wrapper}> */}
        <p className={s.card_price}>{balloon.price} грн.</p>
        {/* <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button> */}
        {/* </div> */}
      </div>

      {/* <button className={s.card_basket__button} onClick={addToCartHandler}>
        Купити
        <Basket className={s.card_basket__button__icon} />
      </button> */}
    </>
  );
};

export default BalloonCard;
