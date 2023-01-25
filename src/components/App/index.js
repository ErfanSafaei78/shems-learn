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

//pages
import { Home } from '../../pages/Home';
import { Main }from '../../pages/Main';
import { Result } from '../../pages/Result';

//ionic components
import { IonApp, IonRouterOutlet } from '@ionic/react';

//contexts
import {wordsContext, wordsList} from '../../contexts/words.context';

setupIonicReact();

export function App() {

  return (
    <wordsContext.Provider value={wordsList}>
      <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    </wordsContext.Provider>
  );
}

