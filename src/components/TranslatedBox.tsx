import { Copy, HorizontalTopLeftMain, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';
import { useState } from 'react';
import { useTraductor } from '../hooks/useTraductor';



export const TranslatedBox = () => {

  const [selected, setSelected] = useState('fr-FR');
  const { copyToClipboard, translateTo, translated } = useTraductor();

  const handleButtonEvent = ( e: any ) => {
    setSelected( e );
  };

  return (
    <article className="box">

      <div className="row">

        {
          translateTo.map( language => (
            <MyButton functionEvent={ handleButtonEvent }
              id={ language.rfc }
              key={ language.rfc } 
              selected={ selected === language.rfc }
              text={ language.name }
            />
          ))
        }

        <select className="myButton text-button" style={{ marginRight: 'auto' }}>
          { translateTo.map( language => (
            <option key={ language.rfc } value={ language.rfc }>{ language.name }</option>
          ))}
        </select>

        <MyButton 
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
        <MyButton 
          leftIcon={ <SoundMaxFill /> }
          personalClass="mini-buttons"
        />

        <MyButton 
          leftIcon={ <Copy /> }
          functionEvent={ () => copyToClipboard( translated ) }
          personalClass="mini-buttons"  
        />
      </div>

    </article>
  )
}