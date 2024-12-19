import { ChangeEvent, useContext, useState } from 'react';
import { TraductorContext } from '../context/TraductorContext';
import { Languages } from '../interfaces/interfaces';
import { getTextTranslated } from '../actions/getTextTranslated';
import { ManageObjects } from '../helpers/ManageObjects';


const voices = speechSynthesis.getVoices();

export const useTraductor = () => {

  const { traductorState, dispatch } = useContext( TraductorContext );
  const [ fetching, setFetching ] = useState( false );

  const { text, from, to, detect, prevText } = traductorState;

  const swipeLanguages = () => {
    return dispatch({ type: 'swipe' });
  };

  const changeSelectedLanguage = ( { type, payload } : { type: 'changeTOLanguages' | 'changeFROMLanguages', payload: Languages } ) => {
    return dispatch({ type, payload });
  };

  const selectLanguage = (  { type, e }: {type: 'selectFROMLanguage' | 'selectTOLanguage', e: React.ChangeEvent<HTMLSelectElement>} ) => {
    dispatch({ type: type, payload: JSON.parse( e.target.value ) })
  };

  const translateText = async () => {

    if ( fetching ||  ( prevText === text ) || (text.trim() === '' ) ) return;

    const regex = /^[a-zA-ZÀ-ÿ0-9](?:[a-zA-ZÀ-ÿ0-9\s]|[.,;:!?-](?![.,;:!?-]))*$/;  

    if ( !regex.test( text ) ) {
      return dispatch({ type: 'translate' , payload: 'Text not valid...' } );
    }

    setFetching( true );

    dispatch({ type: 'translate' , payload: 'Loading...' } );

    const { lang: fromLang } = ManageObjects.indexOfSelected( from );
    const { lang: toLang } = ManageObjects.indexOfSelected( to );
    
    const { textTraduced } = await getTextTranslated({ text, from: detect ? 'Autodetect' : fromLang.iso, to: toLang.iso });

    setFetching(false);

    dispatch({ type: 'translate' ,payload: textTraduced } );
  }

  const detectLanguage = () => {
    dispatch({ type: 'detect' });
  }

  const handleText = ( { target }: ChangeEvent<HTMLTextAreaElement> ) => {
    if ( target.value.length > 500 ) return;
    dispatch({ type: 'changeText', payload: target.value });
  };


  const copyToClipboard = ( text: string ) => {
    if ( text.trim().length === 0 )  return;
    navigator.clipboard.writeText( text );
  };

  const speak = async ( textToSpeak: string ) => {    
    if ( textToSpeak.trim().length <= 0 ) return;

    const utterance = new SpeechSynthesisUtterance( textToSpeak );   
    utterance.voice = voices[2];

    speechSynthesis.speak(utterance);
  }

  return {
    // Properties
    ...traductorState,
    fetching,

    // Methods
    changeSelectedLanguage,
    copyToClipboard,
    handleText,
    selectLanguage,
    speak,
    swipeLanguages,
    translateText,
    detectLanguage,
  };
}