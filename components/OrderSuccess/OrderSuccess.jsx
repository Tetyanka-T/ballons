import Image from "next/image";
import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import sss from "../Basket/Basket.module.scss";
import ss from "../../styles/OrderPage.module.scss";

const OrderSuccess = ({ order }) => {
  const { cart } = useContext(CartContext);
  console.log(order);
  return (
    <div>
      <h2>Дякуємо, що обрали нас {order.userName}</h2>
      <p>Ваше замовлення № {order.numberOrder}</p>
      <ul>
        Деталі замовлення
        {cart.cartItems.map((balloon) => (
          <li className={ss.basket_list__item} key={balloon._id}>
            <div className={ss.basket_photo}>
              <Image src={balloon.imgSrc} alt="" width={70} height={90} />
            </div>
            <div className={ss.basket_list__item__product}>
              <h3 className={ss.basket_list__item__product__title}>
                {balloon.name}
              </h3>
              <p className={ss.basket_list__item__product__art}>
                арт.№ {balloon.code}
              </p>
              <div className={sss.basket_couter}>
                <p>{balloon.quantity}</p>

                <p className={sss.basket__price}>
                  {balloon.quantity * balloon.price} грн
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        <li>Дата свята: {order.deliveryDate}</li>
        <li>Спосіб доставки: {order.deliveryMethod}</li>
        <li>Час доставки: {order.deliveryTime}</li>
        {order.userAddress && <li>Адреса доставки: {order.userAddress}</li>}
        <li>Ваш номер: {order.userPhone}</li>
        <li>Ваш Email: {order.userEmail}</li>
        {order.comment && <li>Ваш коментарій: {order.comment}</li>}
      </ul>
    </div>
  );
};

export default OrderSuccess;
