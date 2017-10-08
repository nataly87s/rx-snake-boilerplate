import PropTypes from 'prop-types';

export const pointType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  hasEaten: PropTypes.bool,
});

export const pointSize = 16;

function wrap(num, to) {
  num %= to;
  if (num < 0) num += to;
  return num;
}

export default class Point {
  constructor(x, y, hasEaten) {
    this.x = x;
    this.y = y;
    this.hasEaten = hasEaten;
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

  tryEat(point) {
    if (this.equals(point)) return new Point(this.x, this.y, true);
    return this;
  }

  equals(other) {
    return other && this.x === other.x && this.y === other.y;
  }
}
