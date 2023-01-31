import { IonContent, IonPage } from "@ionic/react";
import { Button } from "../../components/Button";

export function Result() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ textAlign: "center" }}>
          <Button color="medium" to="/home" value="HOME" />
        </div>
      </IonContent>
    </IonPage>
  );
}
