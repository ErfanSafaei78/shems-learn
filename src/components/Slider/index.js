import { IonSlides, IonContent, IonRow } from "@ionic/react";
import { Button } from "../Button";
import "./index.css";

import image1 from "./assets/life1.png";
import image2 from "./assets/life2.png";
import image3 from "./assets/life3.png";
import { Slide } from "./components/Slide";

const slideOpts = {
  initialSlide: 2,
  speed: 400,
};

export const Slider = () => (
  <IonContent>
    <IonSlides className="container" pager={true} options={slideOpts}>
      <Slide>
        <IonRow className="row">
          <img src={image1} />
        </IonRow>
        <IonRow className="row">
          <Button color="dark" fill="outline" to="/main1" value="Let's go" />
        </IonRow>
      </Slide>

      <Slide>
        <IonRow className="row">
          <img src={image2} />
        </IonRow>
        <IonRow className="row">
          <p className="title">you can only answer 10 questions per day.</p>
        </IonRow>
      </Slide>

      <Slide>
        <IonRow className="row">
          <img src={image3} />
        </IonRow>
        <IonRow className="row">
          <p className="title">choose the meaning of the words.</p>
        </IonRow>
      </Slide>
    </IonSlides>
  </IonContent>
);
