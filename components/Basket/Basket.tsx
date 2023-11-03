"use client"

import Image from "next/image";
import Router from "next/router";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Link from "next/link";
import { Cross } from "../svg";
import s from "./Basket.module.scss";
import Cart from "../../Interface/interface"
const Basket = () => {
  const { addItemToCart, deleteItemFromCart, cart } = useContext(CartContext);

  const increaseQty = (cartItem: Cart) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    addItemToCart(item);
  };

  const decreaseQty = (cartItem: Cart) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty <= 0) return;

    addItemToCart(item);
  };

  const amount = cart?.cartItems?.reduce(
    (acc: any, item: Cart) => acc + item.quantity * item.price,
    0
  );
  return (
    <div className={s.backet}>
      <div className={s.counter_close}>
        <h1 className={s.title}>Кошик</h1>
      </div>
      {cart.length === 0 ? (
        <h1>Ваш кошик порожній</h1>
      ) : (
        <>
          <ul className={s.basket_list}>
            {cart.cartItems.map((balloon: Cart) => (
              <li className={s.basket_list__item} key={balloon._id}>
                <div className={s.basket_photo}>
                  <Image src={balloon.imgSrc} alt="" width={70} height={90} />
                </div>

                <div className={s.basket_list__item__product}>
                  <h3 className={s.basket_list__item__product__title}>
                    {balloon.name}
                  </h3>
                  <p className={s.basket_list__item__product__art}>
                    арт.№ {balloon.code}
                  </p>
                  <div className={s.basket_couter}>
                    <ul className={s.basket_couter__list}>
                      <li className={s.basket_couter__list__item}>
                        <button
                          className={s.basket_couter__list__item_button}
                          onClick={() => decreaseQty(balloon)}
                        >
                          -
                        </button>
                      </li>
                      <li className={s.basket_couter__list__item}>
                        <p>{balloon.quantity}</p>
                      </li>
                      <li className={s.basket_couter__list__item}>
                        <button
                          className={s.basket_couter__list__item_button}
                          onClick={() => increaseQty(balloon)}
                        >
                          +
                        </button>
                      </li>
                      <li className={s.basket_couter__list__item}>
                        <button
                          onClick={() => deleteItemFromCart(balloon.id)}
                          className={s.basket_couter__list__item_button_cross}
                        >
                          <Cross
                            className={s.basket_couter__list__item_button__icon}
                          />
                        </button>
                      </li>
                    </ul>
                    <p className={s.basket__price}>
                      {balloon.quantity * balloon.price} грн
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={s.basket_sum}>
            <p>Разом:</p>

            <p>{amount} грн</p>
          </div>

          <div className={s.basket_order__container}>
            <button
              className={s.basket_order_continu}
              onClick={() => Router.back()}
            >
              Продовжити покупки
            </button>
            <button className={s.basket_order_button}>
              <Link href="/order">Оформити замовлення</Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
