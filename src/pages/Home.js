import { IonContent, IonPage } from "@ionic/react";
import { Slider } from "../components/Slider";
import { Button } from "../components/Button";

export function Home() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slider>
          <p className="title">
            Choose the meaning of the words.
            <br />
            you can only answer 5 questions per day.
          </p>
          <Button color="success" to="/main" value="Start" />
          <Button color="warning" to="/result" value="Results" />
        </Slider>
      </IonContent>
    </IonPage>
  );
}