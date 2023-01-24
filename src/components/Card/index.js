import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import "./index.css";

export function Card(props) {
  return (
    <>
      <IonCard className="card" color={props.color}>
        <IonCardHeader>
          <IonCardSubtitle>{props.title}</IonCardSubtitle>
          <IonCardTitle style={{ textAlign: "center" }}>
          {` Meaning : ${props.value}`}
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </>
  );
}
