import { ChangeEvent, useState } from 'react';
import { Copy, ExpandDown, SortAlfa, SoundMaxFill } from '../assets';
import { MyButton } from './MyButton';


export const Box = () => {

  const [text, setText] = useState('Hello, how are you?');

  const handleText = ( { target }: ChangeEvent<HTMLTextAreaElement> ) => {
    if ( target.value.length > 500 ) return;
    setText( target.value );
  }

  return (
    <article className="box">

      <div className="row">
        <MyButton children={ <h2>Detect Language</h2> } />
        
        <MyButton 
          children={<h2 className={ 'selected' }>English</h2>} 
          selected
        />

        <MyButton children={ <h2>French</h2> } />

        <MyButton 
          children={<><h2>Spain</h2><ExpandDown /></>} 
          flex
        />
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
          children={ <SoundMaxFill /> }
          personalClass="mini-buttons"
        />

        <MyButton 
          children={ <Copy /> }
          personalClass="mini-buttons"
          styles={{ marginRight: 'auto'}}
        />

        <MyButton
          children={ <><SortAlfa /> <h1 className="translate-text">Translate</h1></>}
          personalClass="translate-button"
          flex
        />
      </div>

    </article>
  )
}