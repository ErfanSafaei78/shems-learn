import { IonSlides, IonContent, IonRow, useIonLoading } from "@ionic/react";
import "./index.css";

import image1 from "./assets/life1.png";
import { Slide } from "./components/Slide";

const slideOpts = {
  initialSlide: 2,
  speed: 400,
};

export const Slider = (props) => (
  <IonContent>
    <IonSlides className="container" pager={false} options={slideOpts}>
      <Slide>
        <IonRow className="row">
          <img src={image1} />
        </IonRow>
        <IonRow className="row">{props.children}</IonRow>
      </Slide>
    </IonSlides>
  </IonContent>
);
