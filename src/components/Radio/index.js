import {
  IonItem,
  IonLabel,
  IonRadio,
} from "@ionic/react";

export function Radio(props) {
  return (
    <>
      <IonItem>
        <IonLabel>{props.valueRadio}</IonLabel>
        <IonRadio slot="end" value={props.valueRadio}></IonRadio>
      </IonItem>
    </>
  );
}
