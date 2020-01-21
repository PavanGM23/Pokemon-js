import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

class PokemonApplication extends React.Component {
  render() {
    return (
      <Provider>
        <PokemonContainer />
      </Provider>

    );
  }
}

export default PokemonApplication;
