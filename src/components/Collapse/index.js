import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import List from "../List";
function Collapse() {
  return (
    
    <IonAccordionGroup value="first">
      <IonAccordion value="first">
        <IonItem slot="header" color="primary">
          <IonLabel>Results</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <List
            color="dark"
            question="Question"
            res="Right Answer"
            you="your Answer"
          />
          <List color="medium" question="hand" res="دست" you="پا" />
          <List color="medium" question="test" res="تست" you="تست" />
          <List color="medium" question="test" res="تست" you="تست" />
          <List color="medium" question="test" res="تست" you="تست" />
          <List color="medium" question="test" res="تست" you="تست" />
        </div>
      </IonAccordion>

      <IonAccordion value="second">
        <IonItem slot="header" color="danger">
          <IonLabel>Latest Results</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <List
            color="dark"
            question="Question"
            res="Right Answer"
            you="your Answer"
          />
          <List color="medium" question="test" res="تست" you="تست" />
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}
export default Collapse;
