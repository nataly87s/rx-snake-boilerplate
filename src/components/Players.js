import React, { Fragment } from 'react';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { mapPropsStream } from 'recompose';
import { COLORS } from '../resources/colors';
import { Snake } from './Snake';

export const players$ = new BehaviorSubject();

const Players = ({ players = [] }) => (
  <Fragment>
    {
      players.map((snake, key) => <Snake key={key} shape={snake} color={COLORS[key % COLORS.length]}/>)
    }
  </Fragment>
);

const enhance = mapPropsStream(props$ => combineLatest(props$, players$, (props, players) => ({...props, players})));

export default enhance(Players);
