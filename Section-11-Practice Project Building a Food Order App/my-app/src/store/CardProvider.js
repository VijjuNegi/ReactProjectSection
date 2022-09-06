import CardContext from "./card-context";

const CardProvider = (props) => {
  const addItemToCardHandler = (item) => {};
  const removeItemFromCardHandler = (id) => {};

  const cardContext = {
    item: [],
    totalAmount: 0,
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
