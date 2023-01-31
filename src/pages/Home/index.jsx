import { IonContent, IonPage } from "@ionic/react";

import { Slider } from "./components/Slider";
import { Button } from "../../components/Button";
import { useEffect, useState} from "react";
import { useQuestionCounter } from "../../hooks/question-counter.hook";

export function Home() {
  const questionCounter = useQuestionCounter();
  const [letsgoDisableState, setLetsgoDisableState] = useState(true);
  useEffect(()=>{
    if(questionCounter.isValidToAnswer()){
      setLetsgoDisableState(false);
    }
  },[])
  return (
    <IonPage>
      <IonContent fullscreen>
        <Slider>
          <p className="title">
            Choose the meaning of the words.
            <br />
            you can only answer 5 questions per day.
          </p>
          <Button color="success" to="/quiz" value="let's go" disabled={letsgoDisableState}/>
          <Button color="warning" to="/result" value="Results" />
        </Slider>
      </IonContent>
    </IonPage>
  );
}
