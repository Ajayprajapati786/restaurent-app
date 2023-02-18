import mealsImage from "../../assets/meals.jpg";
import Cart from "../Cart/Cart";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import ReactDOM from "react-dom";
import { useState } from "react";

const ModalOverlay = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "100px",
        left: "0",
        width: "40%",
        height: "40%",
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:'100',
        margin:'0px 30%'
      }}
    >
      <Cart />
    </div>
  );
};

const Header = (props) => {
  const [show, setShow] = useState();
  const handleMessage = (message) => {
    console.log("Header.js");
    console.log(message);
    setShow(message);
  };
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onMessage={handleMessage} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
      {ReactDOM.createPortal(
        show && <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Header;
