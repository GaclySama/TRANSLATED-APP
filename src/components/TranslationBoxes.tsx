import { useState } from 'react';
import { ToTranslateBox } from './ToTranslateBox';
import { TranslatedBox } from './TranslatedBox';
import { TraductorProvider } from '../context/TraductorProvider';
export const TranslationBoxes = () => {

  const [text, setText] = useState('Hello, how are you?');
  const [translatedText, setTranslatedText] = useState('');

  return (
    <TraductorProvider>
      <main className="container">

        <ToTranslateBox setText={ setText } text={ text } />

        <TranslatedBox translatedText={ translatedText } />

      </main>
    </TraductorProvider>
  )
}