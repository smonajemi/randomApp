import React, { FunctionComponent, useState } from 'react';
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/react';

interface IProps {
  id: string;
  url: string;
  alt: string;
}

const Tab1: FunctionComponent = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [images, setImages] = useState<IProps[]>([]);

  const handleSearch = async (event: any) => {
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
      setImages([...images, { id: data.data[0].url, url: data.data[0].url, alt: searchText }]);
    } catch (error) {
      console.error(error);
    }

    setSearchText('');
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <div>
            <IonInput
              value={searchText}
              onIonChange={(event) => setSearchText(event.detail.value!)}
              placeholder="Search for an image..."
            />
            <IonButton onClick={handleSearch} disabled={!searchText}>
              Search
            </IonButton>
          </div>
        </IonCol>
      </IonRow>
      <IonRow>
        {images.map((image) => (
          <IonCol key={image.id}>
            <img src={image.url} alt={image.alt} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};

export default Tab1;
