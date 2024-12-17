import type { TraductionAPIResponse } from '../interfaces/interfaces';

interface Props {
  text: string,
  from: string;
  to: string,
}


export const getTextTranslated = async ({text = 'Hello, how are you?', from = 'en-GB', to = 'en-GB' } : Props ) => {
  
  const url = `https://api.mymemory.translated.net/get?q=${ text }&langpair=${ from }|${ to }`;

  try {
    
    const resp = await fetch( url );
    const data: TraductionAPIResponse = await resp.json();

    const { responseData } = data;

    const textTraduced = ( responseData.match ) ? responseData.translatedText : 'An error has been occurred. Try again';
    
    return {
      textTraduced,
      ok: true
    };

  } catch (error) {

    return {
      textTraduced: 'An error has been occurred. Try again',
      error,
    };
  }
}