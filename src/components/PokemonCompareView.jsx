import React from 'react';
import '../App.css';

class PokemonCompareView extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.selectedPokemonArray = [];
    }

    handleClick(event) {
        
        const { value } = event.currentTarget.attributes.value;
        this.selectedPokemonArray.push({ value });
        alert(value);

        this.props.CompareClickedCallback(this.selectedPokemonArray);
    }


    render() {
        return (
            <div id="wrapper">
                <div id="first" class="container">
                    <img src={require('./bulbasaur.png')} className="image" />
                    <div class="middle">
                        <div class="text" value="bulbasaur" onClick={this.handleClick}>Compare</div>
                    </div>

                </div>
                <div id="second" class="container">
                    <img src={require('./bulbasaur.png')} className="image" />
                    <div class="middle">
                        <div class="text" onClick={this.handleClick}>Compare</div>
                    </div>
                </div>
            </div>


        );
    }
}

export default PokemonCompareView;