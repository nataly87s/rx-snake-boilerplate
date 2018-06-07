import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { pick } from 'ramda';
import { COLORS } from '../resources/colors';
import { Snake } from './Snake';

const Players = ({ players = [] }) => (
  <Fragment>
    {
      players.map((snake, key) => <Snake key={key} shape={snake} color={COLORS[key % COLORS.length]}/>)
    }
  </Fragment>
);

const enhance = connect(pick(['players']));

export default enhance(Players);
