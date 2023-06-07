import { useContext } from "react";
import CartContext from "../../context/CartContext";
import BalloonCard from "../BalloonCard/BalloonCard";
import ComeBackButton from "../ComeBackButton/ComeBackButton";
import { Basket } from "../svg";
import DeleteFavoriteButton from "../../components/FavoriteBatton/DeleteFavoriteButton";
import s from "../../components/BalloonCard/BalloonCard.module.scss";
import ss from "../BuyButton/BuyButton.module.scss";

const Favorite = () => {
  const { addItemToCart, favorite } = useContext(CartContext);

  return (
    <div>
      <ComeBackButton />
      <h2>Добавте свої улюблені композиції</h2>

      {favorite.favoriteItems && (
        <ul className={s.list}>
          {favorite.favoriteItems.map((balloon) => (
            <li key={balloon.id} className={s.card_item}>
              <BalloonCard balloon={balloon} />
              <div className={s.list_button}>
                <button
                  className={ss.button_buy}
                  onClick={() => addItemToCart(balloon)}
                >
                  <span>Купити</span>
                  <Basket className={ss.card_basket__button__icon} />
                </button>
                <DeleteFavoriteButton balloon={balloon} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorite;
