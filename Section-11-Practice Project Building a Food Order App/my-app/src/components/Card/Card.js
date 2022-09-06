import { useContext } from "react";
import classes from "../Css/Cards.module.css";
import Modal from "./Modal";
import CardItem from "./CartItem";
import CardContext from "../../store/card-context";
const Card = (props) => {
  const cardCtx = useContext(CardContext);

  const totalAmount = `$${cardCtx.totalAmount.toFixed(2)}`;
  console.log(totalAmount);
  const hasItem = cardCtx.item.length > 0;

  const cardItemRemoveHandler = (id) => {};
  const cardItemAddHandler = (item) => {};
  const CardItem = (
    <ul className={classes["cart-items"]}>
      {cardCtx.item.map((item) => (
        <CardItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cardItemRemoveHandler.bind(null, item.id)}
          onAdd={cardItemAddHandler(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CardItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[".button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Card;
