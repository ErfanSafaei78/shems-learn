import {
    IonContent,
    IonPage,
    IonRadioGroup,
    useIonLoading,
  } from "@ionic/react";
  import { Button } from "../components/Button";
  import { Card } from "../components/Card";
  import { Radio } from "../components/Radio";
  
  export function Main5() {
    const [present, dismiss] = useIonLoading();
    return (
      <IonPage>
        <IonContent fullscreen>
          <Card color="secondary" timer={`time: ${10}`} number="5" value="hair" />
          <IonRadioGroup>
            <Radio value="item 1" />
            <Radio value="item 2" />
            <Radio value="item 3" />
            <Radio value="item 4" />
          </IonRadioGroup>
          <div style={{ textAlign: "center" }}>
            <Button
              fn={() => {
                present({
                  message: "Loading...",
                  duration: 500,
                  spinner: "circles",
                });
              }}
              color="secondary"
              to="/result"
              value="finish"
            />
          </div>
        </IonContent>
      </IonPage>
    );
  };