import * as actionTypes from '../actions/ActionTypes';
const pokemonData = require('./PokemonsData');

const pokemonReducer = (state = {
    pokemonsData: [],
    pokemonSelectedList: []
    
}, action) => {
    const newState = Object.assign({}, state);


    switch (action.type) {

        case actionTypes.INITIAL_LOAD:
            newState.pokemonsData = pokemonData.List;
            return newState;

        case actionTypes.COMPARE_POKEMON_REQUEST:
            newState.pokemonSelectedList = action.data.pokemonList;
            return newState;

        default:
            return state;
    }
};

export default pokemonReducer;
