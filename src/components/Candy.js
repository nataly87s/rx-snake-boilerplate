import React from 'react';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { mapPropsStream } from 'recompose';
import { compose } from 'recompose';
import candy from '../resources/candy.png';
import withLocation from './withLocation';

export const candy$ = new BehaviorSubject();

const Candy = props => <img src={candy} alt="" {...props}/>;

const enhance = compose(
  mapPropsStream(props$ => combineLatest(props$, candy$, (props, location) => ({...props, location}))),
  withLocation,
);

export default enhance(Candy);
