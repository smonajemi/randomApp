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
import Tab3 from './pages/Tab3';

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

setupIonicReact();

const App: FunctionComponent = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ImageGenerator">
            <ImageGenerator />
          </Route>
          <Route exact path="/GrammarChecker">
            <GrammarChecker />
          </Route>
          {/* <Route path="/tab3">
            <Tab3 />
          </Route> */}
          <Route exact path="/">
            <Redirect to="/ImageGenerator" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="ImageGenerator" href="/ImageGenerator">
            <IonIcon aria-hidden="true" icon={imagesOutline} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="GrammarChecker" href="/GrammarChecker">
            <IonIcon aria-hidden="true" icon={bookOutline} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          {/* <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton> */}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
