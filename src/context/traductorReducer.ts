import { ActionType, InitialState } from '../interfaces/interfaces';


export const traductorReducer = (  state: InitialState, action: ActionType ) => {

  switch ( action.type ) {
    case 'swipe':
      return {
        ...state
      }
  
    default:
      return state;
  }
};