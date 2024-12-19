import { Languages } from '../interfaces/interfaces';



export class ManageObjects {

  static exitsAndIsSelected ( { container, item } : { container: Languages[], item: Languages } ) {

    const existIn = this.exitsIn({ container, item });

    if ( existIn.exist ) {
      const existSelected = container.findIndex ( ( lang ) => lang.selected && ( lang.name === item.name )  );

      return { ...existIn , existSelected: (existSelected !== -1 ) ? true : false, indexSelected: existSelected };
    };

    return { ...existIn , existSelected: false, indexSelected: -1 };
  }

  static exitsIn ( { container, item } : { container: Languages[], item: Languages } ) {
    const exist = container.findIndex ( ( lang ) => lang.name === item.name );

    if ( exist !== -1 ) return { index: exist, exist: true};

    return { index: exist, exist: false }
  }

  static swipeLangSelected ( obj: Languages[] ) {
    return obj.map( ( lang ) => { return { ...lang, selected: !lang.selected } } )
  }

  static indexOfSelected ( obj: Languages[] ) {

    const position = obj.findIndex( ( lang ) => lang.selected );

    return { lang: obj[ position ], position }
  }


}