
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

export interface TraductionAPIResponse {
  responseData:    ResponseData;
  quotaFinished:   boolean;
  mtLangSupported: null;
  responseDetails: string;
  responseStatus:  number;
  responderId:     null;
  exception_code:  null;
  matches:         Match[];
}

export interface Match {
  id:                 string;
  segment:            string;
  translation:        string;
  source:             string;
  target:             string;
  quality:            string;
  reference:          null;
  "usage-count":      number;
  subject:            string;
  "created-by":       string;
  "last-updated-by":  string;
  "create-date":      Date;
  "last-update-date": Date;
  match:              number;
}

export interface ResponseData {
  translatedText: string;
  match:          number;
}

export interface Languages {
  name: string;
  iso : string;
  selected: boolean;
}

export interface InitialState {
  detect        : boolean,
  from          : Languages[],
  languagesToUse: Languages[],
  text          : string, 
  to            : Languages[],
  translated    : string,
}

export type ActionType = 
  | { type: 'swipe' }
  | { type: 'changeFROMLanguages', payload: Languages }
  | { type: 'changeTOLanguages' | 'changeFROMLanguages', payload: Languages }
  | { type: 'changeText', payload: string }
  | { type: 'selectFROMLanguage' | 'selectTOLanguage', payload: Languages }
  | { type: 'translate', payload: string }