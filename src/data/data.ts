import { InitialState } from '../interfaces/interfaces';


export const INITIAL_STATE: InitialState = {
  from: [
    { 
      name: "English",
      rfc: 'en',
    },
    { 
      name: "French",
      rfc: 'fr-FR',
    },
  ],
  to: [
    { 
      name: "French",
      rfc: 'fr-FR',
    },
    { 
      name: "Espanish",
      rfc: 'es-ES',
    },
  ],
  selectFrom: { 
    name: "English",
    rfc: 'en',
  },
  selectTo: { 
    name: "French",
    rfc: 'fr-FR',
  },
  languagesToUse: [],
  translated: 'Bonjour comment allez-vous?',
  detect: false,
};