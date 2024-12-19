import { ManageObjects } from '../helpers/ManageObjects';
import { ActionType, InitialState } from '../interfaces/interfaces';

export const traductorReducer = (  state: InitialState, action: ActionType ): InitialState => {

  switch ( action.type ) {

    case 'changeText':
      return {
        ...state,
        text: action.payload
      };

    case 'translate':
      return {
        ...state,
        translated: action.payload,
      };

    case 'changeFROMLanguages': 
      {
        const { existSelected } = ManageObjects.exitsAndIsSelected({ container: state.to, item: action.payload });

        return {
          ...state,
          text: '',
          from: state.from.map( (language) => { return { ...language, selected: !language.selected } } ),
          to  : existSelected ? ManageObjects.swipeLangSelected( state.to ) : [ ...state.to ],
        }
      };

    case 'changeTOLanguages': 
      {
        const { existSelected } = ManageObjects.exitsAndIsSelected({ container: state.from, item: action.payload });

        return {
          ...state,
          translated: '',
          to: state.to.map( (language) => { return { ...language, selected: !language.selected } }),
          from: existSelected ? ManageObjects.swipeLangSelected( state.from ) : [ ...state.from ],
        }
      };

    case 'selectFROMLanguage': 
    {
      const { exist: fromExist, existSelected: fromExistSelected } = ManageObjects.exitsAndIsSelected({ container: state.from, item: action.payload });

      const { existSelected: toExistSelected } = ManageObjects.exitsAndIsSelected({ container: state.to, item: action.payload });
      
      if ( fromExist && !fromExistSelected ) {
        return {
          ...state,
          text: '',
          from: ManageObjects.swipeLangSelected( state.from ),
          to: toExistSelected ? ManageObjects.swipeLangSelected( state.to ) : [ ...state.to ]
        }
      };

      if ( !fromExist ) {
        const { position } = ManageObjects.indexOfSelected( state.from );

        return {
          ...state,
          text: '',
          from:  state.from.with( position, action.payload ),
          to: toExistSelected ? ManageObjects.swipeLangSelected( state.to ) : [ ...state.to ],
        }
      };

      return {
        ...state,
      };
    };

    case 'selectTOLanguage': 
    {
      const { exist: toExist,existSelected: toExistSelected } = ManageObjects.exitsAndIsSelected({ container: state.to, item: action.payload });

      const { existSelected: fromExistSelected } = ManageObjects.exitsAndIsSelected({ container: state.from, item: action.payload });

      if ( toExist && !toExistSelected ) {
        return {
          ...state,
          translated: '',
          to: ManageObjects.swipeLangSelected( state.to ),
          from: fromExistSelected ? ManageObjects.swipeLangSelected( state.from ) : [ ...state.from ]
        }
      };

      if ( !toExist ) {
        const { position } = ManageObjects.indexOfSelected( state.to );

        return {
          ...state,
          translated: '',
          to:  state.to.with( position, action.payload ),
          from: fromExistSelected ? ManageObjects.swipeLangSelected( state.from ) : [ ...state.from ],
        };
      };

      return {
        ...state
      }
      
    };
    
    case 'swipe':
      {
        const { lang: fromLang, position: fromSelected } = ManageObjects.indexOfSelected( state.from );
        const { lang: toLang, position: toSelected     } = ManageObjects.indexOfSelected( state.to   );

        const { exist: fromInTo } = ManageObjects.exitsIn( { container: state.to  , item: fromLang } );
        const { exist: toInFrom } = ManageObjects.exitsIn( { container: state.from, item: toLang   } );
      
        return {
          ...state,
          from: toInFrom ? ManageObjects.swipeLangSelected( state.from ) : state.from.with( fromSelected, toLang ),
          to  : fromInTo ? ManageObjects.swipeLangSelected( state.to   ) : state.to.with( toSelected, fromLang   ),
          text: state.text ? state.translated : '',
          translated: state.translated ? state.text : '',
        };
      };
  
    default:
      return state;
  }
};