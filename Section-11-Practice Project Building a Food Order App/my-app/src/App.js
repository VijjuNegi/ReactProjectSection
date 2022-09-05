import { Fragment } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Card/Card";
function App() {
  return (
    <Fragment>
      <Card />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
