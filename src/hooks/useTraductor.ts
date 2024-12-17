import { ChangeEvent, useContext, useState } from 'react';
import { TraductorContext } from '../context/TraductorContext';
import { Languages } from '../interfaces/interfaces';
import { getTextTranslated } from '../actions/getTextTranslated';



const voices = speechSynthesis.getVoices();

export const useTraductor = () => {

  const { traductorState, dispatch } = useContext( TraductorContext );
  const [ prevText, setPrevText ] = useState('Hello, how are you?');
  const [ fetching, setFetching ] = useState( false );

  const { selectFrom, selectTo, text, translated } = traductorState;


  // * Dispatch

  const swipeLanguages = () => {
    return dispatch({ type: 'swipe' });
  };

  const changeSelectedLanguage = ( { type, payload } : { type: 'changeTOLanguages' | 'changeFROMLanguages', payload: Languages } ) => {
    setPrevText( '' );
    return dispatch({ type, payload });
  };

  const selectLanguage = (  { type, e }: {type: 'selectFROMLanguage' | 'selectTOLanguage', e: React.ChangeEvent<HTMLSelectElement>} ) => {
    setPrevText( '' );
    dispatch({ type: type, payload: JSON.parse( e.target.value ) })
  };

  const translateText = async () => {

    if ( fetching || ( prevText === text && translated !== '' ) ) return;
    setFetching( true );

    dispatch({ type: 'translate' , payload: 'Loading...' } );
    
    const { textTraduced } = await getTextTranslated({ text, from: selectFrom.iso, to: selectTo.iso });

    setFetching(false);
    setPrevText( text );

    dispatch({ type: 'translate' ,payload: textTraduced } );
  }

  // TODO: Dispatch: detectLanguage

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
  };
}