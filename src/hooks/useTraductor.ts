import { ChangeEvent, useContext, useState } from 'react';
import { TraductorContext } from '../context/TraductorContext';
import { Languages } from '../interfaces/interfaces';


export const useTraductor = () => {

  const { traductorState, dispatch } = useContext( TraductorContext );
  const [text, setText] = useState('Hello, how are you?');


  // * Dispatch

  const swipeLanguages = () => {
    return dispatch({ type: 'swipe' });
  };

  const ChangeSelectedLanguage = ( {type, payload} : { type: 'changeTOLanguages' | 'changeFROMLanguages', payload: Languages } ) => {
    return dispatch({ type, payload });
  };


  // TODO: Dispatch: selectLanguage-translateText-detectLanguage


  const handleText = ( { target }: ChangeEvent<HTMLTextAreaElement> ) => {
    const { value } = target;
    
    if ( value.length > 500 ) return;
    setText( value );
  };

  const copyToClipboard = ( text: string ) => {
    if ( text.length === 0 )  return;
    navigator.clipboard.writeText( text );
  };

  return {
    // Properties
    ...traductorState,
    text,

    // Methods
    copyToClipboard,
    swipeLanguages,
    handleText,
    ChangeSelectedLanguage,
  };
}