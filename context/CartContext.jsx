"use client";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setCartToState();
  }, []);

  useEffect(() => {
    setFavoriteToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const setFavoriteToState = () => {
    setFavorite(
      localStorage.getItem("favorite")
        ? JSON.parse(localStorage.getItem("favorite"))
        : []
    );
  };

  const addItemToCart = async ({
    id,
    name,
    price,
    code,
    category,
    description,
    imgSrc,
    quantity = 1,
  }) => {
    const item = {
      id,
      name,
      price,
      code,
      description,
      imgSrc,
      quantity,
      category,
    };

    const isItemExist = cart?.cartItems?.find((i) => i.id === item.id);

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };
  const removeItemCart = () => {
    localStorage.removeItem("cart");
    setCartToState();
  };
  const addItemToFavorite = async ({
    id,
    name,
    price,
    code,
    description,
    imgSrc,
    category,
  }) => {
    const item = {
      id,
      name,
      price,
      code,
      description,
      imgSrc,
      category,
    };

    const isItemExist = favorite?.favoriteItems?.find((i) => i.id === item.id);

    let newFavoriteItems;

    if (isItemExist) {
      newFavoriteItems = favorite?.favoriteItems?.map((i) =>
        i.id === isItemExist.id ? item : i
      );
    } else {
      newFavoriteItems = [...(favorite?.favoriteItems || []), item];
    }

    localStorage.setItem(
      "favorite",
      JSON.stringify({ favoriteItems: newFavoriteItems })
    );
    setFavoriteToState();
  };
  const deleteItemFromFavorite = (id) => {
    const newFavoriteItems = favorite?.favoriteItems?.filter(
      (i) => i.id !== id
    );

    localStorage.setItem(
      "favorite",
      JSON.stringify({ favoriteItems: newFavoriteItems })
    );
    setFavoriteToState();
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        removeItemCart,
        favorite,
        addItemToFavorite,
        deleteItemFromFavorite,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
