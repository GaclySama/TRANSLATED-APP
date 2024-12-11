import { useState } from 'react';
import { Copy, SortAlfa, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';
import { useTraductor } from '../hooks/useTraductor';


export const ToTranslateBox = () => {

  const [selected, setSelected] = useState('en');
  const { copyToClipboard, languages, text, handleText } = useTraductor();

  return (
    <article className="box">

      <div className="row">
        <MyButton
          text="Detect Language" 
        />
        
        {
          languages.map( language => (
            <MyButton functionEvent={ setSelected }
              key={ language.rfc }
              id={ language.rfc }
              text={ language.name }
              selected={ selected === language.rfc }
            />
          ))
        }

        <select className="myButton text-button">
          { languages.map( language => (
            <option key={ language.rfc } value={ language.rfc }>{ language.name }</option>
          ))}
        </select>
      </div>
    
      <hr />

      <textarea 
        className="text-box" 
        onChange={ handleText }
        value={ text }
      />

      <small className="row" style={{ justifyContent: 'flex-end', marginTop: '0' }}>{ text.length}/500</small>

      <div className="row">
        <MyButton 
          leftIcon={ <SoundMaxFill /> }
          personalClass="mini-buttons"
        />

        <MyButton 
          leftIcon={ <Copy /> }
          functionEvent={ () => copyToClipboard( text ) }
          personalClass="mini-buttons"
          styles={{ marginRight: 'auto'}}
        />

        <MyButton
          leftIcon={ <SortAlfa /> }
          personalClass="translate-button"
          styles={{ display: 'flex '}}
          text="Translate"
        />
      </div>

    </article>
  )
}