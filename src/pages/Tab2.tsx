import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';

const Tab2: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [correctedSentence, setCorrectedSentence] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('http://localhost:3000/api/correct-grammar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
      
    });
    const data = await response.json();
    console.log(data.text)
    setCorrectedSentence(data.text);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit}>
          <IonInput
            placeholder="Enter sentence"
            value={prompt}
            onIonChange={(e: any) => setPrompt(e.detail.value!)}
          />
          <IonButton type="submit" expand="block">Submit</IonButton>
        </form>
        { correctedSentence && <p>Corrected sentence: {correctedSentence}</p> }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
