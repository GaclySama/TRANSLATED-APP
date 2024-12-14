
export interface LanguageAPIResponse {
  data   : Data ;
  code   : number;
  message: string;
  count  : number;
}

interface Data {
  name   : string;
  rfc3066: string;
  iso6391: string;
  iso6392: string;
}

export interface Languages {
  name: string;
  iso : string;
}

export interface InitialState {
  detect        : boolean,
  from          : Languages[],
  languagesToUse: Languages[],
  selectFrom    : Languages,
  selectTo      : Languages,
  to            : Languages[],
  translated    : string,
}

export interface ReducerTypes {
  swipe  : string;
  traduct: string;
}

export type ActionType = 
  | { type: 'swipe' }
  | { type: 'changeFROMLanguages', payload: Languages }
  | { type: 'changeTOLanguages' | 'changeFROMLanguages', payload: Languages }
  | { type: 'selectLanguage', payload: Languages }