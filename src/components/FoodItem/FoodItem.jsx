import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assests/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            className="add"
            alt="add icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.reduce}
              onClick={() => removeFromCart(id)}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <img
          src={assets.rating4_icon}
          alt=""
          id="rating"
          className="food-item-name-rating"
        />
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;
