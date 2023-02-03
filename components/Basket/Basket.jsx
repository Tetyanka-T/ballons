import Image from "next/image";
import { Cansel, Cross } from "../../components/svg";
import s from "./Basket.module.scss";

const Basket = () => {
  return (
    <ul className={s.basket_list}>
      <li className={s.basket_list__item}>
        <div className={s.basket_photo}>
          <Image src="/photo_1.jpg" alt="" width={80} height={60} />
        </div>

        <div className={s.basket_list__item__product}>
          <h3 className={s.basket_list__item__product__title}>
            Супер пупер композиція
          </h3>
          <p className={s.basket_list__item__product__art}>арт.№ 1236</p>
          <div className={s.basket_couter}>
            <ul className={s.basket_couter__list}>
              <li className={s.basket_couter__list__item}>
                <button className={s.basket_couter__list__item_button}>
                  -
                </button>
              </li>
              <li className={s.basket_couter__list__item}>
                <p>1</p>
              </li>
              <li className={s.basket_couter__list__item}>
                <button className={s.basket_couter__list__item_button}>
                  +
                </button>
              </li>
              <li className={s.basket_couter__list__item}>
                <button className={s.basket_couter__list__item_button_cross}>
                  <Cross className={s.basket_couter__list__item_button__icon} />
                </button>
              </li>
            </ul>
            <p className={s.basket__price}>2000 грн</p>
          </div>
        </div>
      </li>
      <li className={s.basket_list__item}>
        <div className={s.basket_photo}>
          <Image src="/photo_1.jpg" alt="" width={80} height={60} />
        </div>

        <div className={s.basket_list__item__product}>
          <h3 className={s.basket_list__item__product__title}>
            Супер пупер композиція
          </h3>
          <p className={s.basket_list__item__product__art}>арт.№ 1236</p>
          <div className={s.basket_couter}>
            <ul className={s.basket_couter__list}>
              <li className={s.basket_couter__list__item}>
                <button className={s.basket_couter__list__item_button}>
                  -
                </button>
              </li>
              <li className={s.basket_couter__list__item}>
                <p>1</p>
              </li>
              <li className={s.basket_couter__list__item}>
                <button className={s.basket_couter__list__item_button}>
                  +
                </button>
              </li>
              <li className={s.basket_couter__list__item}>
                <button className={s.basket_couter__list__item_button_cross}>
                  <Cross className={s.basket_couter__list__item_button__icon} />
                </button>
              </li>
            </ul>
            <p className={s.basket__price}>2000 грн</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Basket;
