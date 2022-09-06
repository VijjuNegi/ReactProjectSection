// import { useReducer } from "react";
import CardContext from "./card-context";
import { useReducer } from "react";

const defaultCardState = {
  item: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItem = state.item.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + state.item.price * action.item.amount;
    return {
      item: updateItem,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCardState;
};

const CardProvider = (props) => {
  const [cardState, dispatchCardAction] = useReducer(
    cardReducer,
    defaultCardState
  );
  const addItemToCardHandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };
  const removeItemFromCardHandler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };

  const cardContext = {
    item: cardState.item,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
