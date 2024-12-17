
import { useTraductor } from '../hooks/useTraductor';
import { Copy, HorizontalTopLeftMain, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';



export const ToTranslatedBox = () => {

  const { 
    to, translated, languagesToUse, selectTo, fetching,
    copyToClipboard, changeSelectedLanguage, swipeLanguages, speak, selectLanguage
  } = useTraductor();

  return (
    <article className="box" style={{ background: '#121826cc'}}>

      <div className="row">

        {
          to.map( language => (
            <MyButton functionEvent={ () => changeSelectedLanguage({ type: 'changeTOLanguages', payload: language }) }
              id={ language.iso }
              key={ language.iso } 
              selected={ selectTo.iso === language.iso }
              text={ language.name }
            />
          ))
        }

        <select
          onChange={ (e) => selectLanguage({ type: 'selectTOLanguage', e }) }
          className="myButton text-button" 
          style={{ marginRight: 'auto' }}
        >
          { languagesToUse.map( language => (
            <option key={ language.iso } 
              value={ JSON.stringify( language ) }
            >
              { language.name }
            </option>
          ))}
        </select>

        <MyButton functionEvent={ swipeLanguages }
          leftIcon={ <HorizontalTopLeftMain /> }
          personalClass="mini-buttons"  
        />
      </div>
    
      <hr />

      <textarea 
        className="text-box" 
        value={ fetching ? 'Traducting...' : translated }
        disabled
      />

      <div className="row">

        <MyButton functionEvent={ () => speak( translated ) }
          leftIcon={ <SoundMaxFill /> }
          personalClass="mini-buttons"
        />

        <MyButton functionEvent={ () => copyToClipboard( translated ) }
          leftIcon={ <Copy /> }
          personalClass="mini-buttons"  
        />
      </div>

    </article>
  )
}