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
        <p className={s.card_price}>{balloon.price} грн.</p>
      </div>
    </>
  );
};

export default BalloonCard;
