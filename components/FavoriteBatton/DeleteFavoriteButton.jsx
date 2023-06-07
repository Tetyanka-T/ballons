import { FavoriteContour, FavoriteSelect } from "../svg";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import s from "./FavoriteButton.module.scss";

const DeleteFavoriteButton = ({ balloon }) => {
  const { deleteItemFromFavorite } = useContext(CartContext);

  const addToFavoriteHandler = () => {
    addItemToFavorite({
      id: balloon._id,
      name: balloon.name,
      price: balloon.price,
      code: balloon.code,
      description: balloon.description,
      imgSrc: balloon.imgSrc,
    });
  };
  return (
    <button
      className={s.cardDescription_button__deletefavorite}
      onClick={() => deleteItemFromFavorite(balloon.id)}
    >
      <FavoriteSelect className={s.cardDescription_button__icon} />
    </button>
  );
};

export default DeleteFavoriteButton;
