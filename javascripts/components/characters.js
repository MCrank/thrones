import { printToDom } from '../helpers/util.js';

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
    imageUrl: 'assets1.ignimgs.com/vid/thumbnails/user/2014/04/01/20823568_theon_game_of_thrones.jpg'
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
    imageUrl: 'http://www.theworkprint.com/wp-content/uploads/2015/06/gregor-clegane-the-mountain-game-of-thrones.jpg'
  }
];

const charactersBuilder = () => {
  let domString = '';
  characters.forEach((character) => {
    domString += `<h1>${character.name}</h1>`;
  });
  printToDom(domString, 'characters');
};

export { charactersBuilder };
