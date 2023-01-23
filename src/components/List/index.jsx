import { IonItem, IonLabel, IonList } from "@ionic/react";
import "./index.css";
function List(props) {
  return (
    <IonList inset={false}>
      <IonItem className="center" color={props.color}>
        <IonLabel>{props.question}</IonLabel>
        <IonLabel>{props.res}</IonLabel>
        <IonLabel>{props.you}</IonLabel>
      </IonItem>
    </IonList>
  );
}
export default List;
