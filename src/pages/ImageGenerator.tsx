import React, { FunctionComponent, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonSpinner, IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { ImageProps } from '../types/Image.types';
import { useApi } from '../components/hooks/useApi';

const ImageGenerator: FunctionComponent = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [images, setImages] = useState<ImageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { generateImage } = useApi()
  const downloadImage = (imageIndex: number) => {
    const confirmDownload = window.confirm('Would you like to download the image?');
    if (confirmDownload) {
      const element = document.createElement('a');
      element.target = '_blank';
      element.href = images[imageIndex].url;
      element.download = `image${imageIndex}.png`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }


  const handleSearch = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    try {
      const data = await generateImage(prompt) as any
      const newImage = { id: data?.data[0]?.url, url: data?.data[0]?.url, alt: prompt };
      setImages([...images, newImage]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }

    setPrompt('');
  };

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonTitle>Image Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <IonGrid>
          <IonRow>
            <IonCol>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em', marginBottom: '2em' }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
                  <IonInput value={prompt} onIonChange={e => setPrompt(e.detail.value!)} placeholder="Enter prompt" style={{ overflow: 'hidden' }}></IonInput>
                  <IonButton type="submit" style={{ overflow: 'hidden', marginLeft: '1em' }}>Generate Image</IonButton>
                </form>
              </div>

            </IonCol>
          </IonRow>
          <div style={{ height: '400px', overflowY: 'scroll', padding: '1em' }}>
            <IonRow>
              {images.map((image, index) => (

                <IonCol size="4" key={index} style={{ display: 'flex', justifyContent: 'center', padding: '.15em' }} onClick={() => downloadImage(index)}>
                  <img src={image.url} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </IonCol>
              ))}
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
      {loading && images.length >= 0 ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IonSpinner name="dots"></IonSpinner>
        </div>
      ) : null}

    </IonPage>
  );
};

export default ImageGenerator;
