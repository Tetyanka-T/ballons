import Image from "next/image";
import Link from "next/link";
import { Cross } from "../../components/svg";
import s from "./Basket.module.scss";

const Basket = () => {
  return (
    <>
      <div className={s.counter_close}>
        <h1 className={s.title}>Кошик</h1>
        <button className={s.basket_close}>
          <Cross />
        </button>
      </div>
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
                    <Cross
                      className={s.basket_couter__list__item_button__icon}
                    />
                  </button>
                </li>
              </ul>
              <p className={s.basket__price}>2000 грн</p>
            </div>
          </div>
        </li>
      </ul>
      <div className={s.basket_sum}>
        <p>Разом:</p>
        <p>4000 грн</p>
      </div>

      <div className={s.basket_order_container}>
        <button className={s.basket_order_continu}>Продовжити покупки</button>
        <button className={s.basket_order_button}>
          <Link href="/order">Оформити замовлення</Link>
        </button>
      </div>
    </>
  );
};

export default Basket;
