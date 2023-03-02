export const useApi = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
  
    if (!apiUrl) {
      throw new Error('API URL is not defined');
    }
  
    const generateImage = async (prompt: string): Promise<string | undefined> => {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      return data
    };
  
    return {
        generateImage,
    } as const;
  };
  