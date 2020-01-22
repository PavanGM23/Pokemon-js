import React from 'react';


class PokemonAttributesList extends React.Component{
render(){
    return (
        <div>
            {console.log("attributes" + this.props.pokemonSelectedList)}
        </div>
    );
}
}

export default PokemonAttributesList;