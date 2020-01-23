import React from 'react';

class PokemonAttributesList extends React.Component {

    render() {

        const { pokemonSelectedList } = this.props;

        return (

            <div id="tableView">
                <table id="pokemons">
                    <tr>
                        <th id='attrId'>Attributes</th>
                        {pokemonSelectedList.map(pokemon =>
                            (
                                <>
                                    <th>{pokemon.name}</th>
                                </>))}
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        {pokemonSelectedList.map(pokemon =>
                            (
                                <>
                                    <td>{pokemon.weakness}</td>
                                </>))}
                    </tr>
                    <tr>
                        <td>Weakness</td>
                        {pokemonSelectedList.map(pokemon =>
                            (
                                <>
                                    <td>{pokemon.abilities}</td>
                                </>))}
                    </tr>
                    <tr>
                        <td>Type</td>
                        {pokemonSelectedList.map(pokemon =>
                            (
                                <>
                                    <td>{pokemon.type}</td>
                                </>))}
                    </tr>
                    <tr>
                        <td>Weight</td>
                        {pokemonSelectedList.map(pokemon =>
                            (
                                <>
                                    <td>{pokemon.weight}</td>
                                </>))}
                    </tr>

                </table >
            </div >
        );
    }
}

export default PokemonAttributesList;