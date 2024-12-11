import { PropsWithChildren, useReducer } from 'react';
import { TraductorContext } from './TraductorContext';
import { INITIAL_STATE } from '../data/data';
import { traductorReducer } from './traductorReducer';


interface Props extends PropsWithChildren {};


export const TraductorProvider = ({ children }: Props ) => {

  const [ traductorState, dispatch ] = useReducer( traductorReducer, INITIAL_STATE )

  return (
    <TraductorContext.Provider value={{
      traductorState,
      dispatch
    }}>
      { children }
    </TraductorContext.Provider>
  )
}