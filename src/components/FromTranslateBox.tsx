
import { useTraductor } from '../hooks/useTraductor';

import { Copy, SortAlfa, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';

export const FromTranslateBox = () => {

  const {
    from, selectFrom, text, languagesToUse, fetching,
    copyToClipboard, handleText, changeSelectedLanguage, speak, selectLanguage, translateText
  } = useTraductor();

  return (
    <article className="box">

      <div className="row">
        <MyButton
          text="Detect Language" 
        />
        
        {
          from.map( language => (
            <MyButton functionEvent={ () => changeSelectedLanguage({ type: 'changeFROMLanguages', payload: language }) }
              key={ language.iso }
              id={ language.iso }
              text={ language.name }
              selected={ selectFrom.iso === language.iso }
            />
          ))
        }

        <select 
          onChange={ ( e ) => selectLanguage({ type: 'selectFROMLanguage', e }) }
          className="myButton text-button"
        >
          { languagesToUse.map( language => (
            <option 
              key={ language.iso } 
              value={ JSON.stringify( language ) }
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
        <MyButton functionEvent={ () => speak( text ) }
          leftIcon={ <SoundMaxFill /> }
          personalClass="mini-buttons"
        />

        <MyButton functionEvent={ () => copyToClipboard( text ) }
          leftIcon={ <Copy /> }
          personalClass="mini-buttons"
          styles={{ marginRight: 'auto'}}
        />

        <MyButton functionEvent={ translateText }
          leftIcon={ <SortAlfa /> }
          personalClass="translate-button"
          styles={{ display: 'flex '}}
          text="Translate"
          selected={ fetching }
        />
      </div>

    </article>
  )
}