import keyCodes from './keyCodes';

export function toDirection ({ key }) {
  switch (key) {
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

export function isLegalMove(prev, next) {
  return (prev[0] !== next[0]) && (prev[1] !== next[1])
}
