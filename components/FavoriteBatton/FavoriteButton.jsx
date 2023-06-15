import { FavoriteContour, FavoriteSelect } from "../svg";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import s from "./FavoriteButton.module.scss";

const FavoriteButton = ({ balloon }) => {
  const { addItemToFavorite } = useContext(CartContext);

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
