import { Fragment } from "react";
import classes from "../Css/Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsImg from "../../asstes/Images/demo.JPG";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Meals App</h1>
        <button>
          <HeaderCartButton />
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} />
      </div>
    </Fragment>
  );
};

export default Header;
