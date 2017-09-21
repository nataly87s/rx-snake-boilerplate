import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { COLORS } from '../resources/colors';
import { Snake, snakeType } from './Snake';

const Players = ({ players }) => (
  <div>
    {
      players.map((snake, key) => <Snake key={key} shape={snake} color={COLORS[key % COLORS.length]}/>)
    }
  </div>
);

Players.propTypes = {
  players: PropTypes.arrayOf(snakeType),
};

Players.defaultProps = {
  players: []
};

export default connect(({ players }) => ({ players }))(Players);
