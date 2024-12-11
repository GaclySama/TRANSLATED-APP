
export interface LanguageAPIResponse {
  [key: number]:     Data;
  code:    number;
  message: string;
  count:   number;
}

interface Data {
  name:    string;
  rfc3066: string;
  iso6391: string;
  iso6392: string;
}

export interface Languages {
  name: string;
  rfc: string;
}

export interface InitialState {
  languages: Languages[],
  translateTo: Languages[],
  languagesToUse: Languages[],
  translated: string,
  detect: boolean,
}

export interface ReducerTypes {
  swipe: string;
  traduct: string;
}

export type ActionType = 
  | { type: 'swipe'; payload: InitialState }
  | { type: 'traduct'; payload: InitialState }