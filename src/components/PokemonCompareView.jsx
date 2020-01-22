import React from 'react';
import '../App.css';

class PokemonCompareView extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.selectedPokemonArray = [];
    }

    handleClick(pokemon) {

        // const { value } = event.currentTarget.attributes.value;
        console.log(pokemon);
        this.selectedPokemonArray.push(pokemon);
        // alert(pokemon);

        this.props.CompareClickedCallback(this.selectedPokemonArray);
    }


    render() {
        return (
            <div id="wrapper">

                {this.props.pokemonsData.map(pokemon =>
                    (<div id={`pokemon${pokemon.id}`} className="card container">
                        <img src={pokemon.image} className="image" />
                        <h4><b>{pokemon.name}</b></h4>
                        <p>{pokemon.place}</p>
                        <div className="middle">
                            <div className="text" value={pokemon} onClick={() => this.handleClick(pokemon)}>Compare</div>
                        </div></div>))}
            </div>


        );
    }
}

export default PokemonCompareView;