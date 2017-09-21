import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure';
import actions from './store/actions';
import game from './game';
import GameBoard from './GameBoard';
import './index.css';

const gameSize = {
  width: 48,
  height: 27,
};

const store = configureStore();
const dispatch = type => payload => store.dispatch({type, payload});
game(
  gameSize,
  dispatch(actions.SET_SNAKE),
  dispatch(actions.SET_CANDY),
  dispatch(actions.SET_PLAYERS),
  dispatch(actions.SET_MESSAGE),
);

ReactDOM.render(
  <Provider store={store}>
    <GameBoard gameSize={gameSize}/>
  </Provider>,
  document.getElementById('root'),
);
