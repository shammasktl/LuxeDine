import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  console.log(food_list);

  return (
    <div className="food-display" id="food-display">
      <h2>Top-Rated Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Using unique id as key
                id={item._id}
                name={item.name}ṇ
                price={item.price}
                image={item.image}
                description={item.description}
              />
            );
          }
          return null; // Return null for items not matching the category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
