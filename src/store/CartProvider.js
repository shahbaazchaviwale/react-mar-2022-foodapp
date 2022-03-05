import { useReducer } from "react";
import { constantType } from "../constant/constant";
import CardContext from "./cart-context";

// add reducer
// step - 1 create default state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//step-2 - reducer funtion
const cartReducer = (state, action) => {
  if (action.type === constantType.ADD_ITEM) {
    const updatedItem = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return{
      items: updatedItem,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //step-3 - use useReducer() & use destructure
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (argItem) => {
    dispatchCartAction({ type: constantType.ADD_ITEM, item: argItem });
  };
  const removeItemFromCartHandler = (argId) => {
    dispatchCartAction({ type: constantType.REMOVE_ITEM, id: argId });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CardContext.Provider value={cartContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
