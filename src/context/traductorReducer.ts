import { ActionType, InitialState } from '../interfaces/interfaces';


export const traductorReducer = (  state: InitialState, action: ActionType ): InitialState => {

  switch ( action.type ) {
    case 'swipe':
      return {
        ...state
       };

    case 'loadLanguages': 
      return {
        ...state,
        // languagesToUse: action.payload.data
       }
  
    default:
      return state;
  }
};