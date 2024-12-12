import { ChangeEvent, useContext, useState } from 'react';
import { TraductorContext } from '../context/TraductorContext';


export const useTraductor = () => {

  const { traductorState  } = useContext( TraductorContext );
  const [text, setText] = useState('Hello, how are you?');


  // TODO: Dispatch



  const handleText = ( { target }: ChangeEvent<HTMLTextAreaElement> ) => {
    const { value } = target;
    
    if ( value.length > 500 ) return;
    setText( value );
  };


  const copyToClipboard = ( text: string ) => {
    if ( text.length === 0 )  return;
    navigator.clipboard.writeText( text );
  }

  return {
    // Properties
    text,
    ...traductorState,

    // Methods
    handleText,
    copyToClipboard,
  }
}