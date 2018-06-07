import actions from './actions';
import { assoc } from 'ramda';

const actionToProp = {
  [actions.SET_CANDY]: 'candy',
  [actions.SET_SNAKE]: 'snake',
  [actions.SET_PLAYERS]: 'players',
  [actions.SET_MESSAGE]: 'message',
};

export default (state = {}, { type, payload }) => {
  const prop = actionToProp[type];

  if (!prop) return state;

  return assoc(prop, payload, state);
}
