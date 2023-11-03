"use client"

import { FavoriteSelect } from "../svg";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

import s from "./FavoriteButton.module.scss";
import Balloon from "../../Interface/interface";

const DeleteFavoriteButton = ({ balloon } : {balloon: Balloon}) => {
  const { deleteItemFromFavorite } = useContext(CartContext);

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
