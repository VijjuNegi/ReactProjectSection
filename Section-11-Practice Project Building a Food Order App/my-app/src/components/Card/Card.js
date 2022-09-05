import classes from "../Css/Cards.module.css";
const Card = (props) => {
  const carditems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {carditems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.60</span>
      </div>
      <div className={classes.actions}>
        <button className={classes[".button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};
export default Card;
