import { ManageObjects } from '../helpers/ManageObjects';
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
        from: updatedFrom,
        selectFrom: state.selectTo,
        selectTo: state.selectFrom,
        text: state.translated,
        to: updatedTo,
        translated: state.text,
       };
      }

    case 'changeFROMLanguages': 
      return {
        ...state,
        from: state.from.filter( language => ( action.payload.iso === language.iso ) ? state.from : [ action.payload, state.from[1]] ),
        translated: '',
        selectFrom: action.payload,
        selectTo: ( action.payload.iso === state.selectTo.iso ) 
                    ? ( ( action.payload.iso === state.to[1].iso ) ? state.to[0] : state.to[1] ) 
                    : state.selectTo,
       };

    case 'changeTOLanguages': 
      return {
        ...state,
        to: state.to.filter( language => ( action.payload.iso === language.iso ) ? state.to : [ action.payload, state.to[1]] ),
        translated: '',
        selectTo: action.payload,
        selectFrom: ( action.payload.iso === state.selectFrom.iso ) 
                      ? ( ( action.payload.iso === state.from[1].iso ) ? state.from[0] : state.from[1] ) 
                      : state.selectFrom,
       };

    case 'changeText':

    return {
      ...state,
      text: action.payload
    }

    case 'selectFROMLanguage': 
    {
      const exist = state.from.some( ( language ) => ManageObjects.compare( language, action.payload ) );

      const index = ( ManageObjects.compare( state.selectTo, action.payload ) ) 
      ? state.to.findIndex( ( language ) => language !== state.selectTo ) 
      : null;

       if (exist) {
         return {
             ...state,
             selectFrom: action.payload,
             selectTo: ( index !== null ) ? state.to[index] : state.selectTo,
           }
       } else {
          
        return {
          ...state,
          from: [ action.payload, ...state.from ].slice( 0, 2 ),
          selectFrom: action.payload,
          selectTo: ( index !== null ) ? state.to[index] : state.selectTo,
        }
      }
    }

    case 'selectTOLanguage': 
    {
      const exist = state.to.some( ( language ) => ManageObjects.compare( language, action.payload ) );

      const index = ( ManageObjects.compare( state.selectFrom, action.payload ) ) 
      ? state.from.findIndex( ( language ) => language !== state.selectFrom ) 
      : null;

      if (exist) {
        return {
            ...state,
            selectTo: action.payload,
            selectFrom: ( index !== null ) ? state.from[index] : state.selectFrom,
          }
      } else {
         
        return {
          ...state,
          to: [ action.payload, ...state.to ].slice( 0, 2 ),
          translated: '',
          selectTo: action.payload,
          selectFrom: ( index !== null ) ? state.from[index] : state.selectFrom,
        }
     }
    }

    case 'translate':
      return {
        ...state,
        translated: action.payload,
      }

    default:
      return state;
  }
};