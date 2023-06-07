import Image from "next/image";
import { Basket, FavoriteContour, FavoriteSelect } from "../svg";
import ComeBackButton from "../ComeBackButton/ComeBackButton";
import s from "./CardDescription.module.scss";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CardDescription = ({ balloon }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      id: balloon._id,
      name: balloon.name,
      price: balloon.price,
      code: balloon.code,
      description: balloon.description,
      imgSrc: balloon.imgSrc,
    });
  };
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
          <div className={s.fav_wrapper}>
            <h3 className={s.cardDescription_title}>{balloon.name}</h3>
            <button className={s.cardDescription_button__favorite}>
              <FavoriteContour className={s.cardDescription_button__icon} />
              <FavoriteSelect
                className={s.cardDescription_button__icon__select}
              />
            </button>
          </div>

          <p className={s.cardDescription_article}>арт.№ {balloon.code}</p>
          <p className={s.cardDescription_descriptionComposition}>
            {balloon.description}
          </p>
          <div className={s.cardDescription_price_container}>
            <p className={s.cardDescription_price}>{balloon.price} грн.</p>
            <button
              className={s.cardDescription_button__basket}
              onClick={addToCartHandler}
            >
              Купити
              <Basket className={s.cardDescription_button__icon} />
            </button>
          </div>
          <p className={s.cardDescription_inform}>
            *Просимо звернути увагу: колір товару може відрізнятися в залежності
            від освітлення та налаштувань Вашого екрану.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDescription;
