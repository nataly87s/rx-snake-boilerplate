/**
 * checks if the snake contains the point
 * @param {Point} point
 * @param {Point[]} snake
 * @returns {boolean} does the snake contain the point
 */
export default function (point, snake) {
  return snake.some(x => point.equals(x));
}
