import { IonContent, IonPage } from "@ionic/react";
import {Collapse} from "../components/Collapse";
import { Button } from "../components/Button";
import {List} from "../components/List";

export function Result() {
  return (
    <IonPage>
      <IonContent fullscreen>
      <Collapse title="Results" value="first" val="first" color="secondary">
          <List
            color="success"
            question="Question"
            res="Right Answer"
            you="your Answer"
          />
          <List color="light" question="hand" res="دست" you="پا" />
          <List color="light" question="hand" res="دست" you="پا" />
          <List color="light" question="hand" res="دست" you="پا" />
          <List color="light" question="hand" res="دست" you="پا" />
          <List color="light" question="hand" res="دست" you="پا" />
        </Collapse>
        <Collapse title="Last Results" value="secound" val="sec" color="danger">
          <List
            color="success"
            question="Question"
            res="Right Answer"
            you="your Answer"
          />
          <List color="light" question="hand" res="دست" you="پا" />
        </Collapse>
        <div style={{ textAlign: "center" }}>
          <Button color="medium" to="/home" value="HOME" />
        </div>
      </IonContent>
    </IonPage>
  );
};