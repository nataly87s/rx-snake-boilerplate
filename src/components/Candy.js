import React from 'react';
import { connect } from 'react-redux';
import candy from '../resources/candy.png';
import { pointType } from '../utils/Point';
import withLocation from './withLocation';

const Candy = withLocation(({ dispatch, ...props }) => <img src={candy} alt="" {...props}/>);

Candy.displayName = 'Candy';
Candy.propTypes = {
  location: pointType,
};

export default connect(state => ({ location: state.candy }))(Candy);
