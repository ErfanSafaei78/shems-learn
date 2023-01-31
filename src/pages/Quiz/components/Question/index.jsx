import {
  IonHeader,
  IonRadio,
  IonItem,
  IonRadioGroup,
  IonList,
  IonLabel,
} from "@ionic/react";
import { useRef } from "react";

export function Question(props) {

  function handleUserAnswer(e) {
    let userAnswer = e.target.value;
    props.handleUserAnswer(userAnswer);
  }

  return (
    <>
      <IonHeader>{props.title}</IonHeader>

      <IonList>
        <IonRadioGroup onClick={handleUserAnswer}>
          {props.choices.map((choice, index) => {
            return (
              <IonItem key={`ionItem-${index}`}>
                <IonLabel>{choice}</IonLabel>
                <IonRadio slot="end" value={index}></IonRadio>
              </IonItem>
            )
          })}
        </IonRadioGroup>
      </IonList>
    </>
  );
}
