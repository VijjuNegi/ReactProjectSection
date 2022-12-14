import { useContext } from "react";
import CardContext from "../../store/card-context";
import CartIcon from "../Card/CartIcon";
import classes from "../Css/HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cardCtx = useContext(CardContext);

  const numberOfCardItems = cardCtx.item.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
