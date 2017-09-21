import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pointType } from '../utils/Point';
import { MAIN_COLOR } from '../resources/colors';
import withLocation from './withLocation';

const Point = withLocation(({ color, style, ...props }) => (
  <div
    style={{ ...style, background: color }}
    {...props}
  />
));
Point.displayName = 'Point';

export const Snake = ({ shape, color }) => (
  <div className="snake">
    {
      shape.map((location, key) => ({ key, color, location })).map(props => <Point {...props}/>)
    }
  </div>
);

export const snakeType = PropTypes.arrayOf(pointType);

Snake.propTypes = {
  shape: snakeType,
  color: PropTypes.string,
};

Snake.defaultProps = {
  color: MAIN_COLOR,
  shape: [],
};

export default connect(state => ({ shape: state.snake }))(Snake);
