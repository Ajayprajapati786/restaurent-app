import mealsImage from "../../assets/meals.jpg";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import ReactDOM from "react-dom";
import { useState } from "react";


const Header = (props) => {

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton  />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
     
    </>
  );
};

export default Header;
