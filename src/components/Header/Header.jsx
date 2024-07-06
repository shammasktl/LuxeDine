import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>
          Order Your <span id="additional">Favourite</span> Food Here
        </h2>
        <p>
          Enjoy a diverse selection of fresh salads, flavorful rolls, hearty
          sandwiches, pure vegetarian dishes, indulgent desserts, creamy pasta,
          and tasty noodles, along with delightful ice creams. Each dish is
          expertly crafted for a memorable dining experience.
        </p>
        <button><a href="#explore-menu">View Menu</a></button>
      </div>
    </div>
  );
};

export default Header;
