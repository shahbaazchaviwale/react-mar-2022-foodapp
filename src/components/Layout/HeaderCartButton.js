import { useContext } from "react";
import CardContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CardContext);
  console.log("cartCtx>>>", cartCtx);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    // console.log('curNumber >>', curNumber)
    // console.log('item >>', item)
    return parseInt(curNumber) + parseInt(item.amount);
  }, 0);


  return (
    <button className={classes.button} onClick={props.openModal}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
