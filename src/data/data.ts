import { InitialState } from '../interfaces/interfaces';


export const INITIAL_STATE: InitialState = {
  languages: [
    { 
      name: "English",
      rfc: 'en',
    },
    { 
      name: "French",
      rfc: 'fr-FR',
    },
  ],
  translateTo: [
    { 
      name: "French",
      rfc: 'fr-FR',
    },
    { 
      name: "Español",
      rfc: 'es',
    },
  ],
  languagesToUse: [],
  translated: 'Bonjour comment allez-vous?',
  detect: false,
};