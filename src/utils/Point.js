import PropTypes from 'prop-types';

export const pointType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  belly: PropTypes.bool,
});

export const pointSize = 16;

function wrap(num, to) {
  num = num % to;
  if (num < 0) num += to;
  return num;
}

export default class Point {
  constructor(x, y, belly) {
    this.x = x;
    this.y = y;
    this.belly = belly;
  }

  static random({ width, height }) {
    return new Point(~~(Math.random() * width), ~~(Math.random() * height));
  }

  move([x = 0, y = 0]) {
    return new Point(this.x + x, this.y + y);
  }

  wrap({ width, height }) {
    return new Point(wrap(this.x, width), wrap(this.y, height));
  }

  withBelly() {
    return new Point(this.x, this.y, true);
  }

  equals(other) {
    return other && this.x === other.x && this.y === other.y;
  }
}
