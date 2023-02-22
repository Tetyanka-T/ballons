import Image from "next/image";
import photo1 from "../../public/photo_1.jpg";
import photo2 from "../../public/photo_2.jpg";
import photo3 from "../../public/photo_3.jpg";
import { Basket, Favorite, FavoriteContour, FavoriteSelect } from "../svg";
import s from "./BalloonCard.module.scss";

const BalloonCard = () => {
  return (
    <ul className={s.list}>
      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div>
          <div className={s.img_container}>
            <Image src={photo1} alt="" width={0} height={0} className={s.img} />
          </div>
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>

        <div className={s.cart_description}>
          <h3 className={s.card_title}>Супер-пупер композиція</h3>
          <p className={s.card_price}>2000 грн.</p>
        </div>

        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
      </li>

      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div className={s.img_container}>
          <Image src={photo1} alt="" width={0} height={0} className={s.img} />
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <div className={s.cart_description}>
          <h3 className={s.card_title}>Супер-пупер композиція</h3>
          <p className={s.card_price}>2000 грн.</p>
        </div>

        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
      </li>
      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div className={s.img_container}>
          <Image src={photo1} alt="" width={0} height={0} className={s.img} />
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <div className={s.cart_description}>
          <h3 className={s.card_title}>Супер-пупер композиція</h3>
          <p className={s.card_price}>2000 грн.</p>
        </div>

        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
      </li>
      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div className={s.img_container}>
          <Image src={photo1} alt="" width={0} height={0} className={s.img} />
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <div className={s.cart_description}>
          <h3 className={s.card_title}>Супер-пупер композиція</h3>
          <p className={s.card_price}>2000 грн.</p>
        </div>

        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
      </li>
      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div className={s.img_container}>
          <Image src={photo1} alt="" width={0} height={0} className={s.img} />
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <div className={s.cart_description}>
          <h3 className={s.card_title}>Супер-пупер композиція</h3>
          <p className={s.card_price}>2000 грн.</p>
        </div>

        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
      </li>
      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div className={s.img_container}>
          <Image src={photo1} alt="" width={0} height={0} className={s.img} />
          <button className={s.cardDescription_button__favorite}>
            <FavoriteContour className={s.cardDescription_button__icon} />
            <FavoriteSelect
              className={s.cardDescription_button__icon__select}
            />
          </button>
        </div>
        <div className={s.cart_description}>
          <h3 className={s.card_title}>Супер-пупер композиція</h3>
          <p className={s.card_price}>2000 грн.</p>
        </div>

        <button className={s.card_basket__button}>
          Купити
          <Basket className={s.card_basket__button__icon} />
        </button>
      </li>
    </ul>
  );
};

export default BalloonCard;
