import { IonContent, IonPage, IonRadioGroup } from "@ionic/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Radio } from "../components/Radio";

export function Main2() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Card color="primary" timer={`time: ${10}`} number="2" value="leave" />
        <IonRadioGroup>
          <Radio value="item 1" />
          <Radio value="item 2" />
          <Radio value="item 3" />
          <Radio value="item 4" />
        </IonRadioGroup>
        <div style={{ textAlign: "center" }}>
          <Button color="primary" to="/main3" value="next" />
        </div>
      </IonContent>
    </IonPage>
  );
};