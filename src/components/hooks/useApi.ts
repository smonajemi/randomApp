import { useIonToast } from "@ionic/react";

export const useApi = () => {
  const [present] = useIonToast();
  const presentToast = (message: string, isError: boolean = false) => {
    present({
      message: message,
      duration: 1500,
      position: 'top',
      color: isError ? 'danger' : undefined, // Use the 'danger' color for error toasts
    });
};

    const apiImageUrl = process.env.REACT_APP_API_IMAGE_URL
    const apiGrammarUrl = process.env.REACT_APP_API_GRAMMAR_URL
    try {
      if (!apiImageUrl || !apiGrammarUrl) {
        throw new Error('API URL is not defined');
      }
    } catch (error) {
      console.log(error)
    }

  
    const generateImage = async (prompt: string): Promise<string | undefined> => {
      try {
        const response = await fetch(apiImageUrl!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        return data
      } catch (error) {
        presentToast(`${error as any} - No Open AI Credit Left`, true)
      } 
    };


    const grammarChecker = async (prompt: string) => {
      try {
        const response = await fetch(apiGrammarUrl!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
        const data = await response.json();
        console.log(data)
        return data.text
      } catch (error) {
        presentToast(`${error as any} - No Open AI Credit Left`, true)
      }
    };
  
    return {
        generateImage,
        grammarChecker
    } as const;
  };
  