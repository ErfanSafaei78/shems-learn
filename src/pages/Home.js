import { IonContent, IonPage } from "@ionic/react";
import { Slider } from "../components/Slider";

export function Home () {
    return (
        <IonPage>
          <IonContent fullscreen>
            <Slider />
          </IonContent>
        </IonPage>
    );
}