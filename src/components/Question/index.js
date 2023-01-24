import { IonRadioGroup } from "@ionic/react";
import { Card } from "../Card";
import {Collapse} from "../Collapse";
import { Radio } from "../Radio";

const Question = (props) => {
  return (
    <Collapse
      value={props.value}
      val={props.set}
      title={props.title}
      color="tertiary"
    >
      <Card color="success" value={props.valueCard} />
      <IonRadioGroup>
        <Radio valueRadio={props.valueRadio1} />
        <Radio valueRadio={props.valueRadio2} />
        <Radio valueRadio={props.valueRadio3} />
        <Radio valueRadio={props.valueRadio4} />
      </IonRadioGroup>
      {props.children}
    </Collapse>
  );
};

export default Question;