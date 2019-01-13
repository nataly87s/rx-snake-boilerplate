import React from 'react';
import { MAIN_COLOR } from '../resources/colors';
import { snake$, withPropFromStream } from '../context';
import withLocation from './withLocation';

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

const enhance = withPropFromStream('shape', snake$);

export default enhance(Snake);
