
import { useTraductor } from '../hooks/useTraductor';

import { Copy, SortAlfa, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';

export const FromTranslateBox = () => {

  const {
    from, selectFrom, text, languagesToUse, 
    copyToClipboard, handleText, ChangeSelectedLanguage
  } = useTraductor();

  return (
    <article className="box">

      <div className="row">
        <MyButton
          text="Detect Language" 
        />
        
        {
          from.map( language => (
            <MyButton functionEvent={ () => ChangeSelectedLanguage({ type: 'changeFROMLanguages', payload: language }) }
              key={ language.rfc }
              id={ language.rfc }
              text={ language.name }
              selected={ selectFrom.rfc === language.rfc }
            />
          ))
        }

        <select className="myButton text-button">
          { languagesToUse.map( language => (
            <option 
              key={ language.rfc } 
              value={ language.rfc }
              onClick={ () => {} }
            >{ language.name }</option>
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