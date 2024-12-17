import { Formatter } from '../helpers/Formatter';
import type { LanguageAPIResponse, Languages } from '../interfaces/interfaces';


const url = 'https://www.translated.net/hts/?f=ll&cid=htsdemo&p=htsdemo5&of=json';

export const getLanguages = async () => {

  try {

    const resp = await fetch( url );
    const data: LanguageAPIResponse = await resp.json();

    const { code, count, message, ...rest } = data;
 
    const newData: Languages[] = Object.values( rest )
      .map((language) => ({
        name: Formatter.notLonger( language.name ),
        iso: language.rfc3066,
      }))
      .filter(( language, index, newData ) =>       
        newData.findIndex((item) => (item.name === language.name && item.iso === language.iso) ) === index
      )
      .filter(( language, index, newData ) =>       
        newData.findIndex((item) => item.name === language.name ) === index
      );

    return {
      newData,
      ok: true
    };

  } catch (error) {

    return {
      error,
    };
  }
}