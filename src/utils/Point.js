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

/**
 * class representing a point
 */
export default class Point {
  /**
   * create a point
   * @param {number} x - The x value
   * @param {number} y - The y value
   * @param {boolean=} hasEaten - has the point eaten
   */
  constructor(x, y, hasEaten) {
    this.x = x;
    this.y = y;
    this.hasEaten = hasEaten;
  }

  /**
   * creates a random point
   * @param {number} width - The maximum x value
   * @param {number} height - The maximum y value
   * @returns {Point}
   */
  static random({ width, height }) {
    return new Point(~~(Math.random() * width), ~~(Math.random() * height));
  }

  /**
   * moves the point
   * @param {number} x
   * @param {number} y
   * @returns {Point}
   */
  move([x = 0, y = 0]) {
    return new Point(this.x + x, this.y + y);
  }

  /**
   * wraps the point around width and height
   * @param {number} width - The maximum x value
   * @param {number} height - The maximum y value
   * @returns {Point}
   */
  wrap({ width, height }) {
    return new Point(wrap(this.x, width), wrap(this.y, height));
  }

  /**
   * sets hasEaten property to true if the points are equal
   * @param {Point} point
   * @returns {Point}
   */
  tryEat(point) {
    if (this.equals(point)) return new Point(this.x, this.y, true);
    return this;
  }

  /**
   * checks if the points are equal
   * @param {Point} other
   * @returns {boolean}
   */
  equals(other) {
    return !!other && this.x === other.x && this.y === other.y;
  }
}
