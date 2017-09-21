import React from 'react';
import PropTypes from 'prop-types';
import { pointSize } from './utils/Point';
import Candy from './components/Candy';
import Snake from './components/Snake';
import Players from './components/Players';
import Message from './components/Message';

const GameBoard = ({ gameSize }) => (
  <div
    className="game-board"
    style={{ width: gameSize.width * pointSize, height: gameSize.height * pointSize }}
  >
    <Players/>
    <Snake/>
    <Candy/>
    <Message/>
  </div>
);

GameBoard.propTypes = {
  gameSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default GameBoard;
