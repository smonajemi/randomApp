import React, { FunctionComponent, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab2: FunctionComponent = () => {
  return (
    <IonPage>
    <IonHeader>
     <IonToolbar>
       <IonTitle color={'danger'}>Tab 2</IonTitle>
     </IonToolbar>
   </IonHeader>
   <IonContent fullscreen>
     <ExploreContainer name="Tab 2 page" />
   </IonContent>
 </IonPage>
  );
};

export default Tab2;
