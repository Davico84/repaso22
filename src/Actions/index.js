import axios from 'axios';

export function addToFav(char) {
    return {
      type: 'ADD_FAV',
      payload: char
    }
};

export function rmFromFav(url) {
    return {
      type: 'REM_FAV',
      payload: url
    }
};

export function charListCreator(data) {
    return {
        type:'SAVE_CHAR_LIST',
        payload:data
    }
};

export function saveToCharList(searchWord) {
    return function (dispatch) {
      axios.get(`https://swapi.dev/api/people/?search=${searchWord}`)
        .then(response => response.data)
        .then(data => dispatch(charListCreator(data.results)))
        .catch(err => console.log(err));
    }
  }