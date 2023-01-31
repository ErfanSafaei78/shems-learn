import { IonItem, IonLabel, IonRadio } from "@ionic/react";

export function Radio(props) {
  return (
    <IonItem>
      <IonLabel>{props.answer}</IonLabel>
      <IonRadio slot="end" value={props.index}>
        {props.answer}
      </IonRadio>
    </IonItem>
  );
}
