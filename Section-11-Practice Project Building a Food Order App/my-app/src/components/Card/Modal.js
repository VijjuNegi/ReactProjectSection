import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "../Css/Modal.module.css";

const backdrop = (props) => {
  return <div className={classes.backdrop} onClose={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <backdrop onClose={props.onClose} />,
        portalElements
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </Fragment>
  );
};
export default Modal;
