import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "../../Css/MealItem.module.css";
import CardContext from "../../../store/card-context";
const MealItem = (props) => {
  const cardCtx = useContext(CardContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCardHandler = (amount) => {
    cardCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealItemForm onAddToCard={addToCardHandler} />
      </div>
    </li>
  );
};

export default MealItem;
