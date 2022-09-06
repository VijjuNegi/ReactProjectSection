import classes from "../Css/Cards.module.css";
import Modal from "./Modal";
const Card = (props) => {
  const CardItem = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CardItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.60</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Card;
