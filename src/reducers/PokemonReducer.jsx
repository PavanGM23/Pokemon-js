import * as actionTypes from '../actions/ActionTypes';


const pokemonReducer = (state = {
    pokemonsData: [],
    pokemonSelectedList: []
    
}, action) => {
    const newState = Object.assign({}, state);


    switch (action.type) {
        case actionTypes.COMPARE_POKEMON_REQUEST:
            newState.pokemonSelectedList = action.data.pokemonList;
            return newState;

        default:
            return state;
    }
};

export default pokemonReducer;
