import { IonButton} from "@ionic/react";
import { Link } from "react-router-dom";
import "./index.css";

export function Button(props) {
  
  return (
    <IonButton
      onClick={props.onClick}
      color={props.color}
      className="btn"
      fill={props.fill}
      shape="round"
      disabled={props.disabled}
    >
      <Link className="link" to={props.to}>
        {props.value}
      </Link>
    </IonButton>
  );
}
