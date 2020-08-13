/**
 * Imports
 */
import api from './services.js';

/**
 * Global variables
 */
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const btnElement = document.getElementById('pokedex-form-btn');
const divElementContainerCards = document.querySelector('.pokedex-container');
const inputElement = document.querySelector('.pokedex-form-input');
let allPokemons = '';

/**
 * @method getPokemons
 * @description
 * @param {}
 * @returns {}
 */
const getPokemons = (() => {
  allPokemons = '';
  const { pokemonsData, pokemonDetail } = api;
  
  // PROMISE ALL
  /* Promise.all([
    pokemonDetail(URL, 1),
    pokemonDetail(URL, 2),
    pokemonDetail(URL, 3)
  ])
  .then((response) => {
    console.log(response);
  }).catch((error) => {
    renderMsg(error);
  }); */
  
  // CHAIN PROMISES
  /* return pokemonDetail(URL, 1)
  .then((response) => {
    console.log(response);
    return pokemonDetail(URL, 2);
  })
  .then((response) => {
    console.log(response);
    return pokemonDetail(URL, 3);
  })
  .then((response) => {
    console.log(response);
    return console.log("FINISH");
  }) */
  
  pokemonsData(URL, inputElement.value)
  .then((response) => {
    getPokemonDetail(response.results);
  }).catch((error) => {
    renderMsg(error);
  });
});

/**
 * @method getPokemonDetail
 * @description 
 * @param {array} pokemons
 * @returns {}
 */
const getPokemonDetail = ((pokemons) => {
  const { pokemonsDetail } = api;
  //let allPromises = []
  pokemons.forEach((pokemon) => {
    //allPromises.push(pokemonsDetail(pokemon.url));
    pokemonsDetail(pokemon.url)
    .then((response) => {
      divElementContainerCards.innerHTML = allCardsMarkup(response);
    }).catch((error) => {
      renderMsg(error);
    })
  });
  
  // PROMISE RACE
  /* Promise.race(allPromises).then((response) => {
    divElementContainerCards.innerHTML = allCardsMarkup(response);
  }).catch((error) => {
    renderMsg(error);
  }) */
});

/**
 * @method allCardsMarkup
 * @description
 * @returns {}
 */
const allCardsMarkup = ((pokemon) => {
  const { sprites, order, name, weight } = pokemon;
  allPokemons += cardMarkup(sprites.front_default, order, name, weight);
  return allPokemons;
})

/**
 * @method cardMarkup
 * @description Card marking method
 * @returns {}
 */
const cardMarkup = ((img, order, pokemonName, weight) => {
  return (
    `<div class="pokedex-container-card">
    <img src=${img} alt="pokemón"/>
    <p>Order: ${order}</p>
    <p>Nombre: ${pokemonName}</p>
    <p>Peso: ${weight}</p>
    </div>`
    );
  });
  
  /**
   * @method renderMsg
   * @description Render message on the DOM
   * @returns {String}
   */
  const renderMsg = ((msg) => document.querySelector('.pokedex-msg').innerHTML = msg );
  
  /**
   * Listeners
   */
  btnElement.addEventListener('click', getPokemons);
  

  /**
   * OBJETIVO 1
   */

  const btnObjetivo1 = document.getElementById('objetivo1');
  const objetivo1 = (() => {
    allPokemons = '';
    const { pokemonsData, pokemonDetail } = api;
    pokemonsData(URL, 10)
    .then((response) => {
      const random = response.results.sort(() => Math.random()-0.5);
      const hola = getPokemonDetail(random.slice(0,3));
      console.log(random);
      console.log(hola);
    }).catch((error) => {
      renderMsg(error);
    });
  });
  
  btnObjetivo1.addEventListener('click', objetivo1());