import keyCodes from './keyCodes';

/**
 * converts a key event to a direction tuple
 * @param event - the key event
 * @returns {?number[]} - direction tuple or null if the key was not an arrow key
 */
export function toDirection (event) {
  switch (event.key) {
    case keyCodes.ArrowUp:
      return [0, -1];
    case keyCodes.ArrowDown:
      return [0, 1];
    case keyCodes.ArrowLeft:
      return [-1, 0];
    case keyCodes.ArrowRight:
      return [1, 0];
    default:
      return null;
  }
}

/**
 * checks if the next direction is legal
 * @param {number[]} prev - the previous direction
 * @param {number[]} next - the next direction
 * @returns {boolean} is the next direction legal
 */
export function isLegalMove(prev, next) {
  return (prev[0] !== next[0]) && (prev[1] !== next[1])
}
