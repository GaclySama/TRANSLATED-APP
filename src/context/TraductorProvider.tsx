import { PropsWithChildren, useReducer } from 'react';

import { TraductorContext } from './TraductorContext';
import { traductorReducer } from './traductorReducer';
import type { InitialState } from '../interfaces/interfaces';


interface Props extends PropsWithChildren {
  data: InitialState;
};


export const TraductorProvider = ({ children, data }: Props ) => {

  const [ traductorState, dispatch ] = useReducer( traductorReducer, data );

  return (
    <TraductorContext.Provider value={{
      traductorState,
      dispatch
    }}>
      { children }
    </TraductorContext.Provider>
  )
}