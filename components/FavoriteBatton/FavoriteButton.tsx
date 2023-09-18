import { FavoriteContour, FavoriteSelect } from "../svg";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import s from "./FavoriteButton.module.scss";
import Balloon from "../../Interface/interface";

const FavoriteButton = ({ balloon }: {balloon: Balloon}) => {
  const { addItemToFavorite } = useContext(CartContext);

  const addToFavoriteHandler = () => {
    addItemToFavorite({
      id: balloon._id,
      name: balloon.name,
      price: balloon.price,
      category: balloon.category,
      code: balloon.code,
      description: balloon.description,
      imgSrc: balloon.imgSrc,
    });
  };
  return (
    <>
      <button
        className={s.cardDescription_button__favorite}
        onClick={addToFavoriteHandler}
      >
        <FavoriteContour className={s.cardDescription_button__icon} />
        <FavoriteSelect className={s.cardDescription_button__icon__select} />
      </button>
    </>
  );
};

export default FavoriteButton;
