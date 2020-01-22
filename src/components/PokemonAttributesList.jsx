import React from 'react';


class PokemonAttributesList extends React.Component {
    render() {
        const attributes = ["abilities",
            "weakness",
            "type",
            "weight"]
        const { pokemonSelectedList } = this.props;
        return (
            <div id="tableView">
                {/* {console.log("attributes" + pokemonSelectedList)} */}

                <table id="pokemons">
                    <tr>
                        <th>Attributes</th>
                        {this.props.pokemonSelectedList.map(pokemon =>
                            (
                                <>
                                    <th>{pokemon.name}</th>
                                </>))}
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        {this.props.pokemonSelectedList.map(pokemon =>
                            (
                                <>

                                    <td>{pokemon.weakness}</td>
                                </>))}
                    </tr>
                    <tr>
                        <td>Weakness</td>
                        {this.props.pokemonSelectedList.map(pokemon =>
                            (
                                <>

                                    <td>{pokemon.abilities}</td>
                                </>))}
                    </tr>
                    <tr>
                        <td>Type</td>
                        {this.props.pokemonSelectedList.map(pokemon =>
                            (
                                <>

                                    <td>{pokemon.type}</td>
                                </>))}
                    </tr>
                    <tr>
                        <td>Weight</td>
                        {this.props.pokemonSelectedList.map(pokemon =>
                            (
                                <>

                                    <td>{pokemon.weight}</td>
                                </>))}
                    </tr>

                </table>
            </div>
        );
    }
}

export default PokemonAttributesList;