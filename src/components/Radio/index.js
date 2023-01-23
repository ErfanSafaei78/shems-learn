import { IonItem, IonLabel, IonRadio } from "@ionic/react";

export function Radio(props) {
  return (
    <IonItem>
      <IonLabel>{props.value}</IonLabel>
      <IonRadio slot="end" value={props.value}></IonRadio>
    </IonItem>
  );
}
