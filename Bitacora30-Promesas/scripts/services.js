const api = {
    pokemonsData: ((URL, limit = 1) => {
      return new Promise((resolve, reject) => {
        fetch(`${URL}?limit=${limit}&offset=0`)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error))
      });
    }),
    pokemonsDetail: ((URL) => {
      return new Promise((resolve, reject) => {
        fetch(`${URL}`)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error))
      });
    }),
    pokemonDetail: ((URL, id) => {
      return new Promise((resolve, reject) => {
        fetch(`${URL}${id}`)
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error))
      });
    })
  };
  
  export default api;