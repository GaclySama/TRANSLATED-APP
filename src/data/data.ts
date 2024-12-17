import { InitialState } from '../interfaces/interfaces';


export const INITIAL_STATE: InitialState = {
  from: [
    {name: 'English', iso: 'en-GB'},
    {name: 'French', iso: 'fr-FR'},
  ],
  to: [
    {name: 'French', iso: 'fr-FR'},
    { name: 'Spanish', iso: 'es-ES' },
  ],
  selectFrom: {name: 'English', iso: 'en-GB'},
  selectTo: {name: 'French', iso: 'fr-FR'},
  languagesToUse: [],
  text: 'Hello, how are you?',
  translated: 'Bonjour comment allez-vous?',
  detect: false,
};