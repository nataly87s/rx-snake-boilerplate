import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import candy from '../resources/candy.png';
import withLocation from './withLocation';

const Candy = ({ dispatch, ...props }) => <img src={candy} alt="" {...props}/>;

const enhance = compose(
  connect(state => ({ location: state.candy })),
  withLocation,
);

export default enhance(Candy);
