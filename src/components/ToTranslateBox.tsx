
import { useTraductor } from '../hooks/useTraductor';
import { Copy, HorizontalTopLeftMain, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';



export const ToTranslatedBox = () => {

  const { 
    to, translated, languagesToUse, selectTo,
    copyToClipboard, ChangeSelectedLanguage, swipeLanguages, speak
  } = useTraductor();

  return (
    <article className="box">

      <div className="row">

        {
          to.map( language => (
            <MyButton functionEvent={ () => ChangeSelectedLanguage({ type: 'changeTOLanguages', payload: language }) }
              id={ language.iso }
              key={ language.iso } 
              selected={ selectTo.iso === language.iso }
              text={ language.name }
            />
          ))
        }

        <select className="myButton text-button" style={{ marginRight: 'auto' }}>
          { languagesToUse.map( language => (
            <option key={ language.iso } value={ language.iso }>{ language.name }</option>
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
        value={ translated }
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