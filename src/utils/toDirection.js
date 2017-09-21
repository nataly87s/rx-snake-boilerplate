import keyCodes from './keyCodes';

export default function ({ key }) {
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
      return [];
  }
}
