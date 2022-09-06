import cardContext from "./CardContext";
const CardProvider = (props) => {
  const addItemToCardHandler = (item) => {};
  const removeItemToCardHandler = (id) => {};

  const cardContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemToCardHandler,
    removeItem: addItemToCardHandler,
  };
  return (
    <cardContext.Provider value={cardContext}>
      {props.children}
    </cardContext.Provider>
  );
};

export default CardProvider;
