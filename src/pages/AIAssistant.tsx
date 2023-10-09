import React, { useState } from 'react';
import { IonContent, IonPage, IonFooter, IonTextarea, IonButton, IonItem, IonLabel, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const handleSend = () => {
    if (currentMessage.trim().length > 0) {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  const handleKeyPress = (event: { key: string; }) => {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      handleSend(); // Call your send function
    }
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AI Assistant</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent style={{ padding: '1rem' }}>
        {messages.map((message, index) => (
          <IonItem
            key={index}
            lines="none"
            style={{
              background: 'none',
              padding: '.5px',
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
            }}
          >
            <IonLabel
              class={index % 2 === 0 ? 'sender' : 'receiver'}
              style={{
                backgroundColor: '#007aff',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '12px',
                maxWidth: `${Math.min(20 + message.length * 1, 100)}%`,
                wordWrap: 'break-word',
                display: 'inline-block',
                minWidth: '0'  // this can help in flex containers
              }}
            >
              {message}
            </IonLabel>

          </IonItem>
        ))}
      </IonContent>
      <IonFooter style={{ borderTop: '5px solid black', height: '60px', display: 'flex', alignItems: 'flex-end', position: 'relative' }}> {/* Added position: 'relative' */}
        <IonItem lines="none" style={{ width: '100%', display: 'flex', padding: '5px 10px', alignItems: 'center', paddingRight: '60px' }}> {/* Increased padding to avoid overlap with the fixed button */}
          <IonTextarea
            value={currentMessage}
            placeholder="iMessage"
            onKeyDown={handleKeyPress}
            onIonChange={(e) => setCurrentMessage(e.detail.value!)}
            autoGrow={true}
            style={{
              flex: 1,
              padding: '5px',
              maxHeight: '50px'
            }}
          ></IonTextarea>
        </IonItem>
        <IonButton
          fill="clear"
          onClick={handleSend}
          style={{
            position: 'fixed',
            right: '10px',
            bottom: '10px',
            flexShrink: 0
          }}>
          Send
        </IonButton>
      </IonFooter>


    </IonPage>
  );
};
export default AIAssistant;
