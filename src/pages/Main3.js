import { IonContent, IonPage, IonRadioGroup } from "@ionic/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Radio } from "../components/Radio";

export function Main3() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Card color="danger" timer={`time: ${10}`} number="3" value="hand" />
        <IonRadioGroup>
          <Radio value="item 1" />
          <Radio value="item 2" />
          <Radio value="item 3" />
          <Radio value="item 4" />
        </IonRadioGroup>
        <div style={{ textAlign: "center" }}>
          <Button color="danger" to="/main4" value="next" />
        </div>
      </IonContent>
    </IonPage>
  );
};