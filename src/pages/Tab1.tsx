import React, { FunctionComponent, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonSpinner } from '@ionic/react';

interface IProps {
  id: string;
  url: string;
  alt: string;
}

const Tab1: FunctionComponent = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [images, setImages] = useState<IProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (event: any) => {
    event.preventDefault();
    setLoading(true);

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
      const newImage = { id: data.data[0].url, url: data.data[0].url, alt: prompt };
      setImages([...images, newImage]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }

    setPrompt('');
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <div style={{ justifyContent: 'center', display: 'flex', marginTop: '2em', marginBottom: '2em' }}>
            <form onSubmit={handleSearch}>
              <IonInput value={prompt} onIonChange={e => setPrompt(e.detail.value!)} placeholder="Enter prompt" style={{ overflow: 'hidden' }}></IonInput>
              <IonButton type="submit" style={{ overflow: 'hidden' }}>Generate Image</IonButton>
            </form>
          </div>
        </IonCol>
      </IonRow>
      <div style={{ height: '600px', overflowY: 'scroll' }}>
        <IonRow>
          {images.map((image, index) => (
            <IonCol size="4" key={index} style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}>
              <img src={image.url} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </IonCol>
          ))}
        </IonRow>
      </div>
      {loading && images.length > 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
          <IonSpinner />
        </div>
      ) : null}

    </IonGrid>
  );
};

export default Tab1;
