import { sortEvents } from './components/characters.js';
import { getCharacters } from './data/charactersData.js';
const initApp = () => {
  getCharacters();
  sortEvents();
};

initApp();
