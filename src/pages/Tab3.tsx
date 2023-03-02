import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { FunctionComponent } from 'react';
import ExploreContainer from '../components/ExploreContainer';

const Tab3: FunctionComponent = () => {
  return (
    <IonPage>
       <IonHeader>
        <IonToolbar>
          <IonTitle color={'danger'}>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
