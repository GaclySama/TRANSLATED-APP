import { ActionType, InitialState } from '../interfaces/interfaces';


export const traductorReducer = (  state: InitialState, action: ActionType ): InitialState => {

  switch ( action.type ) {
    case 'swipe':
      {
        const updatedFrom = state.from.some( (language) => language.rfc === state.selectTo.rfc)
        ? state.from
        : [{ name: state.selectTo.name, rfc: state.selectTo.rfc }, ...state.from].slice(0, 2);
    
      const updatedTo = state.to.some((language) => language.rfc === state.selectFrom.rfc )
        ? state.to
        : [{ name: state.selectFrom.name, rfc: state.selectFrom.rfc }, ...state.to].slice(0, 2);

      return {
        ...state,
        selectFrom: state.selectTo,
        selectTo: state.selectFrom,
        from: updatedFrom,
        to: updatedTo,
       };
      }

    case 'changeFROMLanguages': 
      return {
        ...state,
        from: state.from.filter( language => ( action.payload.rfc === language.rfc ) ? state.from : [ action.payload, state.from[1]] ),
        selectFrom: action.payload,
        selectTo: ( action.payload.rfc === state.selectTo.rfc ) 
                    ? ( ( action.payload.rfc === state.to[1].rfc ) ? state.to[0] : state.to[1] ) 
                    : state.selectTo,
       };

    case 'changeTOLanguages': 
      return {
        ...state,
        to: state.to.filter( language => ( action.payload.rfc === language.rfc ) ? state.to : [ action.payload, state.to[1]] ),
        selectTo: action.payload,
        selectFrom: ( action.payload.rfc === state.selectFrom.rfc ) ? ( ( action.payload.rfc === state.from[1].rfc ) ? state.from[0] : state.from[1] ) : state.selectFrom,
       };

    case 'selectLanguage':

    return {
      ...state
    }
  
    default:
      return state;
  }
};