import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import actions from './store/actions';
import gameSize from './utils/gameSize';
import game from './game';
import GameBoard from './GameBoard';
import './index.css';

const store = configureStore();
const set = type => payload => store.dispatch({type, payload});
const clear = type => () => store.dispatch({type});
game(
  gameSize,
  set(actions.SET_SNAKE),
  set(actions.SET_CANDY),
  set(actions.SET_PLAYERS),
  set(actions.SET_MESSAGE),
  clear(actions.SET_MESSAGE),
);

ReactDOM.render(
  <Provider store={store}>
    <GameBoard gameSize={gameSize}/>
  </Provider>,
  document.getElementById('root'),
);
