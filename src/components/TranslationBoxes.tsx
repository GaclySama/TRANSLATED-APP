import { ToTranslateBox, TranslatedBox } from './';

import { TraductorProvider } from '../context/TraductorProvider';
import { useFetchLanguages } from '../hooks/useFetchLanguages';


export const TranslationBoxes = () => {

  const { data, hasError, isLoading } = useFetchLanguages();

  return (
    <>
      {
        isLoading 
        ? ( 
            <h1 
              style={{ display: 'flex', placeContent:'center', color: 'white'}}
            >
                { hasError ? hasError : 'Loading...' }
            </h1>
          )
        : (
            <TraductorProvider data={ data }>
              <main className="container">

                <ToTranslateBox />

                <TranslatedBox />

              </main>
            </TraductorProvider>
          )
      }
    </>
  )
}