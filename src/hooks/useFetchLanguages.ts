
import { useEffect, useState } from "react";

import { getLanguages } from '../actions/getLanguages';
import { INITIAL_STATE } from '../data/data';


export const useFetchLanguages = () => {

  const [ data, setData] = useState( INITIAL_STATE );
  const [ isLoading, setIsLoading] = useState( true );
  const [ hasError, setHasError ] = useState('');

  useEffect(() => {
    const initializeState = async () => {
      const languages = await getLanguages();

      if ( languages.ok ) {
        setData({
          ...data,
          languagesToUse: languages.newData!,
        });
        setIsLoading(false);
      }

      if ( languages.error ) {
        setHasError( languages.error.toString() );
      }
    };

    initializeState();
  });

  return {
    data,
    isLoading,
    hasError
  }
}