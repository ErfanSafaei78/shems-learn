import { IonSlide, IonGrid } from "@ionic/react";

export const Slide = (props) => (
  <IonSlide>
    <IonGrid>{props.children}</IonGrid>
  </IonSlide>
);
