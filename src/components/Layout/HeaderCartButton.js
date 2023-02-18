import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import { useState } from "react";


const HeaderCartButton = props =>{

    const[isShow,setIsShow] = useState(false);
    const cartshow =()=>{
        setIsShow(!isShow);
        // console.log(isShow);
    }

    const handleClick =()=>{
        props.onMessage(isShow);
    }
    const runBoth =()=>{
        cartshow();
        handleClick();
    }
    
    return <button className={classes.button} onClick={runBoth}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
    
};

export default HeaderCartButton;