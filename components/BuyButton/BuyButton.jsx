import { Basket } from "../svg";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import s from "./BuyButton.module.scss";

function BuyButton({ balloon }) {
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
    <button className={s.button_buy} onClick={addToCartHandler}>
      <span>Купити</span>
      <Basket className={s.card_basket__button__icon} />
    </button>
  );
}

export default BuyButton;
