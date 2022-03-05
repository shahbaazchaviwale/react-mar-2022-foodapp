import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItem = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: "m4",
          name: "Green Bowl",
          description: "Healthy...and green...",
          price: 18.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Close</button>
      </div>
    </Modal>
  );
};


export default Cart;