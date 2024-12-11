import { createContext } from 'react';
import { ActionType, InitialState } from '../interfaces/interfaces';

export type TranslateContextProps = {
  traductorState: InitialState,
  dispatch: React.Dispatch<ActionType>;
};

export const TraductorContext = createContext({} as TranslateContextProps );