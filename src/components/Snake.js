import React from 'react';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { mapPropsStream } from 'recompose';
import { MAIN_COLOR } from '../resources/colors';
import withLocation from './withLocation';

export const snake$ = new BehaviorSubject();

const Point = withLocation(({ color, style, ...props }) => (
  <div
    style={{ ...style, background: color }}
    {...props}
  />
));
Point.displayName = 'Point';

export const Snake = ({ shape = [], color = MAIN_COLOR }) => (
  <div className="snake">
    {
      shape.map((location, key) => ({ key, color, location })).map(props => <Point {...props}/>)
    }
  </div>
);

const enhance = mapPropsStream(props$ => combineLatest(props$, snake$, (props, shape) => ({...props, shape})));

export default enhance(Snake);
