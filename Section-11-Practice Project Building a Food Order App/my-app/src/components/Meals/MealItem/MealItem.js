import MealItemForm from "./MealItemForm";
import classes from "../../Css/MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
