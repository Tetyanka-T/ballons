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
      <h2>Додайте свої улюблені композиції</h2>

      {favorite.favoriteItems && (
        <ul className={s.list}>
          {favorite.favoriteItems.map((balloon) => (
            <li key={balloon.id} className={s.card_item}>
              <BalloonCard balloon={balloon} />

              <div className={s.list_button_basket}>
                {balloon.category === "Фотозони" ||
                balloon.category === "Оформлення фасадів" ? (
                  <>
                    <div className={s.list_button_favorite_category}>
                      <DeleteFavoriteButton balloon={balloon} />
                    </div>
                    <a
                      href="tel:+380968118244"
                      className={s.list_button_consultation}
                      aria-label="здійснити дзвінок консультанту"
                    >
                      Отримати консультацію
                    </a>
                  </>
                ) : (
                  <>
                    <div className={s.list_button_favorite}>
                      <DeleteFavoriteButton balloon={balloon} />
                    </div>
                    <button
                      className={ss.button_buy}
                      onClick={() => addItemToCart(balloon)}
                      aria-label="додати до кошика"
                    >
                      <span>Купити</span>
                      <Basket className={ss.card_basket__button__icon} />
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorite;
