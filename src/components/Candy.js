import React from 'react';
import { compose } from 'recompose';
import candy from '../resources/candy.png';
import { candy$, withPropFromStream } from '../context';
import withLocation from './withLocation';

const Candy = props => <img src={candy} alt="" {...props}/>;

const enhance = compose(
  withPropFromStream('location', candy$),
  withLocation,
);

export default enhance(Candy);
