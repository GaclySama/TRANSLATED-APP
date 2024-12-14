import { ActionType, InitialState } from '../interfaces/interfaces';


export const traductorReducer = (  state: InitialState, action: ActionType ): InitialState => {

  switch ( action.type ) {
    case 'swipe':
      {
        const updatedFrom = state.from.some( (language) => language.iso === state.selectTo.iso)
        ? state.from
        : [{ name: state.selectTo.name, iso: state.selectTo.iso }, ...state.from].slice(0, 2);
    
      const updatedTo = state.to.some((language) => language.iso === state.selectFrom.iso )
        ? state.to
        : [{ name: state.selectFrom.name, iso: state.selectFrom.iso }, ...state.to].slice(0, 2);

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
        from: state.from.filter( language => ( action.payload.iso === language.iso ) ? state.from : [ action.payload, state.from[1]] ),
        selectFrom: action.payload,
        selectTo: ( action.payload.iso === state.selectTo.iso ) 
                    ? ( ( action.payload.iso === state.to[1].iso ) ? state.to[0] : state.to[1] ) 
                    : state.selectTo,
       };

    case 'changeTOLanguages': 
      return {
        ...state,
        to: state.to.filter( language => ( action.payload.iso === language.iso ) ? state.to : [ action.payload, state.to[1]] ),
        selectTo: action.payload,
        selectFrom: ( action.payload.iso === state.selectFrom.iso ) ? ( ( action.payload.iso === state.from[1].iso ) ? state.from[0] : state.from[1] ) : state.selectFrom,
       };

    case 'selectLanguage':

    return {
      ...state
    }
  
    default:
      return state;
  }
};