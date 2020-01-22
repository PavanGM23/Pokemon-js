import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PokemonCompareView from './PokemonCompareView';
import PokemonAttributesList from './PokemonAttributesList';
import * as PokemonActions from '../actions/PokemonActions';
import pokemonReducer from '../reducers/PokemonReducer';

class PokemonContainer extends React.Component {

    constructor(props) {
        super(props);
        this.props.pokemonActions.getPokemonData();
    }

    render() {
        const { pokemonSelectedList, pokemonActions, pokemonsData } = this.props;
        return (
            <>
                <PokemonCompareView
                    CompareClickedCallback={pokemonActions.CompareClickedAction}
                    pokemonsData={pokemonsData}
                />
                <PokemonAttributesList
                    pokemonSelectedList={pokemonSelectedList}
                />
            </>
        );
    }
}

const mapStateToProps = state => ({
    pokemonsData: state.pokemonReducerState.pokemonsData,
    pokemonSelectedList: state.pokemonReducerState.pokemonSelectedList,
});

function mapDispatchToProps(dispatch) {
    return {
        pokemonActions: bindActionCreators(PokemonActions, dispatch),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);

const pokemonReducers = Object.assign({}, { pokemonReducerState: pokemonReducer });

export { pokemonReducers };
