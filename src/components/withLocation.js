import React from 'react';
import classNames from 'classnames';
import { pointSize } from '../utils/Point';

const mapStyleToProps = ({ style, location: { x, y, belly }, className, ...props }) => ({
  ...props,
  className: classNames(className, 'point'),
  style: {
    transform: `translate(${x * pointSize}px, ${y * pointSize}px) ${belly ? 'scale(1.3)' : ''}`,
    ...style,
  },
});

export default Component => props => props.location ? <Component {...mapStyleToProps(props)} /> : null;
