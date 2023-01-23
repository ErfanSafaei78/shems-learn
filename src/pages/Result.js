import { IonContent, IonPage } from "@ionic/react";
import Collapse from "../components/Collapse";

export function Result() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Collapse />
      </IonContent>
    </IonPage>
  );
};