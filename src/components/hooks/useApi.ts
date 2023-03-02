export const useApi = () => {
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
      const response = await fetch(apiImageUrl!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      return data
    };


    const grammarChecker = async (prompt: string) => {
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
    };
  
    return {
        generateImage,
        grammarChecker
    } as const;
  };
  