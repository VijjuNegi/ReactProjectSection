import React, { createContext } from "react";

const cardContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cardContext;
