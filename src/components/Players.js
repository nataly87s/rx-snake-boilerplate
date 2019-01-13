import React, { Fragment } from 'react';
import { COLORS } from '../resources/colors';
import { players$, withPropFromStream } from '../context';
import { Snake } from './Snake';

const Players = ({ players = [] }) => (
  <Fragment>
    {
      players.map((snake, key) => <Snake key={key} shape={snake} color={COLORS[key % COLORS.length]}/>)
    }
  </Fragment>
);

const enhance = withPropFromStream('players', players$);

export default enhance(Players);
