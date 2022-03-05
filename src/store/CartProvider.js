import CardContext from "./cart-context";
const addItemToCartHandler = (item) => {};
const removeItemFromCartHandler = (id) => {};

const cartContext = {
  items: [],
  totalAmount: 0,
  addItem: addItemToCartHandler,
  removeItem: removeItemFromCartHandler,
};
const CartProvider = (props) => {
  return <CardContext.Provider value={cartContext} >{props.children}</CardContext.Provider>;
};

export default CartProvider;
