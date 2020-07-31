const URL = 'http://hang-man-api.herokuapp.com';
const complexity = "easy";
const endpointIdWordURL = URL + "/v1/genword/";

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
};

function infoRequest(type, body = null) {
    if (body === null) {
        return {
            method: type,
            header: headers   
        }
    } else { 
        return {
        method: type,
        header: headers,  
        body: JSON.stringify(body)  
    }}
};

const API = {
    nuevaPalabra: () => {
        return new Promise((resolve, reject) => {
            fetch(endpointIdWordURL + complexity, infoRequest("GET"))
            .then ((response) => resolve (response.json()))
            .catch ((error) => reject(error))
        });
    },
    sendCharacter: (characters, idWord) => {
        return new Promise ((resolve, reject) => {
            fetch(endpointIdWordURL + idWord, infoRequest("POST", characters))
                .then ((response) => resolve(response.json()))
                .catch ((error) => reject(error))
        })
    },
    getImage: () => {}
};

export default API;