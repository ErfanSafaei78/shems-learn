//react and ionic
import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';
import { Main2 }from '../../pages/Main2';
import { Main1 }from '../../pages/Main1';
import { Main3 }from '../../pages/Main3';
import { Main4 }from '../../pages/Main4';
import { Main5 }from '../../pages/Main5';
import { Result } from '../../pages/Result';

//ionic components
import { IonApp, IonRouterOutlet } from '@ionic/react';

//pages
import { Home } from '../../pages/Home';

setupIonicReact();

export function App() {

  return (
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/main1">
          <Main1 />
        </Route>
        <Route exact path="/main2">
          <Main2 />
        </Route>
        <Route exact path="/main3">
          <Main3 />
        </Route>
        <Route exact path="/main4">
          <Main4 />
        </Route>
        <Route exact path="/main5">
          <Main5 />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  );
}

