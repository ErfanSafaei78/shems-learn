import { IonContent, IonPage, useIonLoading } from "@ionic/react";
import { Button } from "../components/Button";
import Question from "../components/Question";

export const Main = () => {
  const [present, dismiss] = useIonLoading();

  return (
    <IonPage>
      <IonContent fullscreen>
        <Question
          value="first"
          set="first"
          title="Question 1:"
          valueCard="hand"
          valueRadio1="test1"
          valueRadio2="test2"
          valueRadio3="test3"
          valueRadio4="test4"
        />

        <Question
          value="two"
          set="two-2"
          title="Question 2:"
          valueCard="foot"
          valueRadio1="test1"
          valueRadio2="test2"
          valueRadio3="test3"
          valueRadio4="test4"
        />

        <Question
          value="there"
          set="there-3"
          title="Question 3:"
          valueCard="hair"
          valueRadio1="test1"
          valueRadio2="test2"
          valueRadio3="test3"
          valueRadio4="test4"
        />

        <Question
          value="four"
          set="four-4"
          title="Question 4:"
          valueCard="arm"
          valueRadio1="test1"
          valueRadio2="test2"
          valueRadio3="test3"
          valueRadio4="test4"
        />

        <Question
          value="five"
          set="five-5"
          title="Question 5:"
          valueCard="eye"
          valueRadio1="test1"
          valueRadio2="test2"
          valueRadio3="test3"
          valueRadio4="test4"
        >
          <div style={{ textAlign: "center" }}>
            <Button
              fn={() => {
                present({
                  message: "Loading...",
                  duration: 500,
                  spinner: "circles",
                });
              }}
              color="success"
              to="/result"
              value="finish"
            />
          </div>
        </Question>
      </IonContent>
    </IonPage>
  );
};
