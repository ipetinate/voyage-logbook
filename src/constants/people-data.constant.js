import People from '../models/people.model'

const peopleOne = new People({
  birth_year: '19 BBY',
  eye_color: 'Blue',
  films: [
    'https://swapi.co/api/films/1/'
  ],
  gender: 'Male',
  hair_color: 'Blond',
  height: '172',
  homeworld: 'https://swapi.co/api/planets/1/',
  mass: '77',
  name: 'Luke Skywalker',
  skin_color: 'Fair',
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-10T13:52:43.172000Z',
  species: [
    'https://swapi.co/api/species/1/'
  ],
  starships: [
    'https://swapi.co/api/starships/12/'
  ],
  url: 'https://swapi.co/api/people/1/',
  vehicles: [
    'https://swapi.co/api/vehicles/14/'
  ]
})

const peopleTwo = new People({
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
  homeworld: 'https://www.swapi.co/api/planets/1/',
  films: [
    'https://www.swapi.co/api/films/2/',
    'https://www.swapi.co/api/films/5/',
    'https://www.swapi.co/api/films/4/',
    'https://www.swapi.co/api/films/6/',
    'https://www.swapi.co/api/films/3/',
    'https://www.swapi.co/api/films/1/'
  ],
  species: [
    'https://www.swapi.co/api/species/2/'
  ],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:10:51.357000Z',
  edited: '2014-12-20T21:17:50.309000Z',
  url: 'https://www.swapi.co/api/people/2/'
})

const peopleThree = new People({
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a',
  homeworld: 'https://www.swapi.co/api/planets/8/',
  films: [
    'https://www.swapi.co/api/films/2/',
    'https://www.swapi.co/api/films/5/',
    'https://www.swapi.co/api/films/4/',
    'https://www.swapi.co/api/films/6/',
    'https://www.swapi.co/api/films/3/',
    'https://www.swapi.co/api/films/1/',
    'https://www.swapi.co/api/films/7/'
  ],
  species: [
    'https://www.swapi.co/api/species/2/'
  ],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:11:50.376000Z',
  edited: '2014-12-20T21:17:50.311000Z',
  url: 'https://www.swapi.co/api/people/3/'
})

export { peopleOne, peopleTwo, peopleThree }
