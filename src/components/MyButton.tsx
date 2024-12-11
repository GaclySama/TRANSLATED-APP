
interface Props {
  id?: string;
  leftIcon?: JSX.Element;
  personalClass?: string;
  rigthIcon?: JSX.Element;
  selected?: boolean;
  styles?: React.CSSProperties;
  text?: string;

  functionEvent?: any;
}

export const MyButton = ({ 
  id, personalClass = '', rigthIcon, selected, styles, text,leftIcon, functionEvent = () => {}
}: Props) => {

  const handleEvent = ( e: React.MouseEvent<HTMLButtonElement> ) => {

    if ( id ) {
      functionEvent( id );
    } else {
      functionEvent( e );
    }
  }

  return (
    <button 
      className={`myButton text-button ${ personalClass } ${ selected ? 'selected' : '' }`} 
      style={{
        ...styles,
      }}
      onClick={ handleEvent }
      disabled={ selected }
    >
      { leftIcon && leftIcon }
      { text && text }
      { rigthIcon && rigthIcon }
    </button>
  )
}