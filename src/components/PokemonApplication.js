import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import PokemonContainer from './PokemonContainer';
import { pokemonReducers } from './PokemonContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ ...pokemonReducers }),
  compose(applyMiddleware(sagaMiddleware)),
);

class PokemonApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PokemonContainer />
      </Provider>

    );
  }
}

export default PokemonApplication;
