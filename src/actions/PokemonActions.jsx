import * as actionTypes from './ActionTypes';

export function CompareClickedAction(pokemonList) {
  return {
    type: actionTypes.COMPARE_POKEMON_REQUEST,
    data: {
        pokemonList,
    },
  };
}

export function getPokemonData(){
    return {
        type: actionTypes.INITIAL_LOAD
    };
}

export function editClickedAction(){
  return {
    type: actionTypes.EDIT_CLICKED
  };
}