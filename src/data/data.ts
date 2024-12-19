import { InitialState } from '../interfaces/interfaces';


export const INITIAL_STATE: InitialState = {
  from: [
    {name: 'English', iso: 'en-GB', selected: true },
    {name: 'French', iso: 'fr-FR', selected: false },
  ],
  to: [
    {name: 'French', iso: 'fr-FR', selected: true },
    { name: 'Spanish', iso: 'es-ES', selected: false },
  ],
  languagesToUse: [],
  text: 'Hello, how are you?',
  translated: 'Bonjour comment allez-vous?',
  detect: false,
};