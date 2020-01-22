import * as actionTypes from './ActionTypes';

export function CompareClickedAction(pokemonList) {
  return {
    type: actionTypes.COMPARE_POKEMON_REQUEST,
    data: {
        pokemonList,
    },
  };
}