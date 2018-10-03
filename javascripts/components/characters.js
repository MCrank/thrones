import { printToDom } from '../helpers/util.js';
import { detailsBuilder } from './details.js';

const characters = [];

const characterClick = (e) => {
  const characterId = e.target.closest('.character-card').id;
  const currentCharacter = characters.find((x) => x.id === characterId);
  detailsBuilder(currentCharacter);
};

const createEvents = () => {
  const characterCards = document.getElementsByClassName('character-card');
  for (let i = 0; i < characterCards.length; i++) {
    characterCards[i].addEventListener('click', characterClick);
  }
};

const charactersBuilder = () => {
  let domString = '';
  characters.forEach((character) => {
    domString += `<div class="col-2 character-card" id="${character.id}">`;
    domString += `<div class="card">`;
    domString += `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
    domString += `<div class="card-body">`;
    domString += `<h5 class="card-title text-center">${character.name}</h5>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, 'characters');
  createEvents();
};

export { charactersBuilder };
