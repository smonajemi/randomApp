import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookOutline, square, imagesOutline } from 'ionicons/icons';
import ImageGenerator from './pages/ImageGenerator';
import GrammarChecker from './pages/GrammarChecker';
import TaAIAssistant from './pages/AIAssistant';

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
import './theme/variables.css';
import { FunctionComponent } from 'react';
import AIAssistant from './pages/AIAssistant';

setupIonicReact();

const App: FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/imageGenerator">
            <ImageGenerator />
          </Route>
          <Route exact path="/grammarChecker">
            <GrammarChecker />
          </Route>
          <Route path="/aiAssistant">
            <AIAssistant />
          </Route>
          <Route exact path="/">
            <Redirect to="/ImageGenerator" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="imageGenerator" href="/imageGenerator">
            <IonIcon aria-hidden="true" icon={imagesOutline} />
            <IonLabel>Image</IonLabel>
          </IonTabButton>
          <IonTabButton tab="grammarChecker" href="/grammarChecker">
            <IonIcon aria-hidden="true" icon={bookOutline} />
            <IonLabel>Grammar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="assistant" href="/aiAssistant">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>AI</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
