
interface Props {
  children: JSX.Element | JSX.Element[];
  styles?: React.CSSProperties;
  flex?: boolean;
  selected?: boolean;
  personalClass?: string;
}

export const MyButton = ({ 
  children, styles, flex, selected, personalClass = '', 
}: Props) => {

  const handleEvent = () => {

  }

  
  return (
    <button 
      className={`myButton ${ personalClass } ${ selected ? 'selected' : '' }`} 
      style={{
        ...styles,
        display: flex ? 'flex' : '',
        color: 'white'
      }}
      onClick={ handleEvent }
    >
      { children }
    </button>
  )
}