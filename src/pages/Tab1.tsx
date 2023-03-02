import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonImg } from '@ionic/react';
import Spinner from '../components/Spinner';

const Tab1: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt
        })
      });
      const data = await response.json();
      setImage(data.data[0].url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
<>
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Ionic React DALL-E Example</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <IonInput value={prompt} onIonChange={e => setPrompt(e.detail.value!)} placeholder="Enter prompt"></IonInput>
        <IonButton type="submit">Generate Image</IonButton>
      </form>

      {image ? <IonImg src={image} onClick={handleSubmit}></IonImg> : <Spinner />}
    </div>
  </IonContent>
</IonPage>
</>
);
};

export default Tab1;
