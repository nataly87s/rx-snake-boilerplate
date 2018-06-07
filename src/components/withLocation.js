import classNames from 'classnames';
import { mapProps, branch, renderNothing } from 'recompose';
import { prop } from 'ramda';
import { pointSize } from '../utils/Point';

const mapStyleToProps = ({ style, location: { x, y, hasEaten }, className, ...props }) => ({
  ...props,
  className: classNames(className, 'point'),
  style: {
    transform: `translate(${x * pointSize}px, ${y * pointSize}px) ${hasEaten ? 'scale(1.3)' : ''}`,
    ...style,
  },
});

export default branch(prop('location'), mapProps(mapStyleToProps), renderNothing);
