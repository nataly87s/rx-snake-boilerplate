import React from 'react';
import ReactDOM from 'react-dom';
import { from } from 'rxjs';
import { setObservableConfig } from 'recompose';
import { snake$, candy$, players$, message$ } from './context';
import gameSize from './utils/gameSize';
import game from './game';
import GameBoard from './GameBoard';
import './index.css';

setObservableConfig({fromESObservable: from})

game(
  gameSize,
  snake$.next.bind(snake$),
  candy$.next.bind(candy$),
  players$.next.bind(players$),
  message$.next.bind(message$),
  message$.next.bind(message$),
);

ReactDOM.render(
    <GameBoard gameSize={gameSize}/>,
  document.getElementById('root'),
);
