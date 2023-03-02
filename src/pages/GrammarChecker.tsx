import { FunctionComponent, useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTextarea,
  IonButton,
  IonCard,
  IonCardContent,
  IonSpinner,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { useApi } from '../components/hooks/useApi';

const GrammarChecker: FunctionComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [correctedSentence, setCorrectedSentence] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const { grammarChecker } = useApi();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (prompt.trim() === '') {
      return;
    }
    setLoading(true);
    try {
      const data = await grammarChecker(prompt) as any;
      setCorrectedSentence(data);
      setHistory([...history, prompt]);
      setPrompt('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grammar Checker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={handleSubmit}>
              <IonTextarea
                value={prompt}
                placeholder="Enter your paragraph"
                onIonChange={(e) => setPrompt(e.detail.value!)}
              ></IonTextarea>
              <div className="ion-text-center ion-margin">
                <IonButton type="submit" disabled={!prompt}>
                  {loading ? <IonSpinner name="dots" /> : 'Generate'}
                </IonButton>
              </div>
            </form>
            {correctedSentence && (
              <div className="ion-padding-top">
                <p>The corrected sentence is:</p>
                <p>{correctedSentence}</p>
              </div>
            )}
          </IonCardContent>
        </IonCard>
        {history.length > 0 && (
          <IonCard>
            <IonCardContent>
              <h2>History:</h2>
              <IonList lines="full">
                {history.map((item, index) => (
                  <IonItem key={index}>
                    <IonLabel>{item}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default GrammarChecker;
