import { Card } from "flowbite-react";
import Image from "next/image";
import photo1 from "../../public/photo_1.jpg";
import photo2 from "../../public/photo_2.jpg";
import photo3 from "../../public/photo_3.jpg";
import { Basket, Favorite, FavoriteContour, FavoriteSelect } from "../svg";
import s from "./BalloonCard.module.scss";

const BalloonCard = () => {
  return (
    <ul className={s.list}>
      <li className={s.card_container}>
        <div className={s.img_container}>
          <Image
            src={photo1}
            alt=""
            width={150}
            height={80}
            className={s.img}
          />
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <h3 className={s.card_title}>Супер-пупер композиція</h3>

        {/* <div className={s.card_decr}> */}
        <p className={s.card_price}>2000 грн.</p>
        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
        {/* </div> */}
      </li>

      <li className={s.card_container}>
        <div className={s.img_container}>
          <Image
            src={photo1}
            alt=""
            width={130}
            height={80}
            className={s.img}
          />

          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <h3 className={s.card_title}>Супер-пупер композиція</h3>

        {/* <div className={s.card_decr}> */}
        <p className={s.card_price}>2000 грн.</p>
        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
        {/* </div> */}
      </li>
      <li className={s.card_container}>
        <div className={s.img_container}>
          <Image
            src={photo1}
            alt=""
            width={130}
            height={80}
            className={s.img}
          />

          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <h3 className={s.card_title}>Супер-пупер композиція</h3>

        {/* <div className={s.card_decr}> */}
        <p className={s.card_price}>2000 грн.</p>
        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
        {/* </div> */}
      </li>
      <li className={s.card_container}>
        <div className={s.img_container}>
          <Image
            src={photo1}
            alt=""
            width={130}
            height={80}
            className={s.img}
          />

          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <h3 className={s.card_title}>Супер-пупер композиція</h3>

        {/* <div className={s.card_decr}> */}
        <p className={s.card_price}>2000 грн.</p>
        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
        {/* </div> */}
      </li>

      <li className={s.card_container}>
        <div className={s.img_container}>
          <Image
            src={photo1}
            alt=""
            width={130}
            height={80}
            className={s.img}
          />

          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <h3 className={s.card_title}>Супер-пупер композиція</h3>

        {/* <div className={s.card_decr}> */}
        <p className={s.card_price}>2000 грн.</p>
        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
        {/* </div> */}
      </li>
      <li className={s.card_container}>
        <div className={s.img_container}>
          <Image
            src={photo1}
            alt=""
            width={130}
            height={80}
            className={s.img}
          />

          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <h3 className={s.card_title}>Супер-пупер композиція</h3>

        {/* <div className={s.card_decr}> */}
        <p className={s.card_price}>2000 грн.</p>
        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
        {/* </div> */}
      </li>
    </ul>
  );
};

export default BalloonCard;
