import { InitialState } from '../interfaces/interfaces';


export const INITIAL_STATE: InitialState = {
  from: [
    { 
      name: "English",
      iso: 'en',
    },
    { 
      name: "French",
      iso: 'fr',
    },
  ],
  to: [
    { 
      name: "French",
      iso: 'fr',
    },
    { 
      name: "Espanish",
      iso: 'es',
    },
  ],
  selectFrom: { 
    name: "English",
    iso: 'en',
  },
  selectTo: { 
    name: "French",
    iso: 'fr',
  },
  languagesToUse: [],
  translated: 'Bonjour comment allez-vous?',
  detect: false,
};