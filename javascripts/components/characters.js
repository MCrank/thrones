import { printToDom } from '../helpers/util.js';
import { detailsBuilder } from './details.js';

const characters = [
  {
    id: 'character1',
    name: 'Hodor',
    house: 'Stark',
    imageUrl: 'https://www.ilpost.it/wp-content/uploads/2016/05/hodor-game-of-thrones.jpeg'
  },
  {
    id: 'character2',
    name: 'Theon Greyjoy',
    house: 'Greyjoy',
    imageUrl: 'http://assets1.ignimgs.com/vid/thumbnails/user/2014/04/01/20823568_theon_game_of_thrones.jpg'
  },
  {
    id: 'character3',
    name: 'Joffrey',
    house: 'Lannister',
    imageUrl: 'http://static3.businessinsider.com/image/572bb270dd0895d3538b473f-960-720/joffrey.png'
  },
  {
    id: 'character4',
    name: 'Gregor Clegane',
    house: 'Clegane',
    imageUrl: 'https://timedotcom.files.wordpress.com/2015/09/the-mountain-got.jpg?quality=85'
  }
];

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
