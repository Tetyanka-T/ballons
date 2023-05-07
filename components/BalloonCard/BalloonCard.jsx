import Image from "next/image";
import Link from "next/link";
import photo1 from "../../public/photo_1.jpg";
import { Basket, Favorite, FavoriteContour, FavoriteSelect } from "../svg";
import s from "./BalloonCard.module.scss";

const BalloonCard = ({ balloons }) => {
  return (
    <ul className={s.list}>
      {balloons.map((balloon) => (
        <li className={s.card_item} key={balloon.id}>
          <div className={s.card_item__hover}></div>
          <div>
            <Link href="/categories/baby/id">
              <div className={s.img_container}>
                <Image
                  src={balloon.imgSrc}
                  alt=""
                  width="200"
                  height="300"
                  className={s.img}
                />
                <div className={s.transparent}></div>
              </div>
            </Link>
            <button className={s.cardDescription_button__favorite}>
              <FavoriteContour className={s.cardDescription_button__icon} />
              <FavoriteSelect
                className={s.cardDescription_button__icon__select}
              />
            </button>
          </div>

          <div className={s.cart_description}>
            <h3 className={s.card_title}>{balloon.name}</h3>
            <p className={s.card_price}>{balloon.price} грн.</p>
          </div>

          <button className={s.card_basket__button}>
            Купити
            <Basket className={s.card_basket__button__icon} />
          </button>
        </li>
      ))}

      {/* 
      <li className={s.card_item}>
        <div className={s.card_item__hover}></div>
        <div>
          <Link href="/categories/baby/id">
            <div className={s.img_container}>
              <Image
                src={photo1}
                alt=""
                width={0}
                height={0}
                className={s.img}
              />
              <div className={s.transparent}></div>
            </div>
          </Link>
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
        <div>
          <Link href="/categories/baby/id">
            <div className={s.img_container}>
              <Image
                src={photo1}
                alt=""
                width={0}
                height={0}
                className={s.img}
              />
              <div className={s.transparent}></div>
            </div>
          </Link>
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
        <div>
          <Link href="/categories/baby/id">
            <div className={s.img_container}>
              <Image
                src={photo1}
                alt=""
                width={0}
                height={0}
                className={s.img}
              />
              <div className={s.transparent}></div>
            </div>
          </Link>
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
        <div>
          <Link href="/categories/baby/id">
            <div className={s.img_container}>
              <Image
                src={photo1}
                alt=""
                width={0}
                height={0}
                className={s.img}
              />
              <div className={s.transparent}></div>
            </div>
          </Link>
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
        <div>
          <Link href="/categories/baby/id">
            <div className={s.img_container}>
              <Image
                src={photo1}
                alt=""
                width={0}
                height={0}
                className={s.img}
              />
              <div className={s.transparent}></div>
            </div>
          </Link>
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
      </li> */}
    </ul>
  );
};

export default BalloonCard;
