import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Card/Card";
import CardProvider from "./store/CardProvider";
function App() {
  const [cardIsShown, setCardIsShown] = useState(false);

  const cardShowHandler = () => {
    setCardIsShown(true);
  };

  const hideShowHandler = () => {
    setCardIsShown(false);
  };

  return (
    <CardProvider>
      {cardIsShown && <Card onClose={hideShowHandler} />}
      <Header onShowCard={cardShowHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
