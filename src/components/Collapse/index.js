import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";

export function Collapse(props) {
  return (
    
    <IonAccordionGroup value={props.value}>
      <IonAccordion value={props.val}>
        <IonItem slot="header" color={props.color}>
          <IonLabel>{props.title}</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
        {props.children}
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  );
}