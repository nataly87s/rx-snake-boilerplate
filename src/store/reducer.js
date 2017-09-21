import actions from './actions';

export default (state = {}, {type, payload}) => {
  function assoc(property) {
    return {
      ...state,
      [property]: payload,
    };
  }

  switch (type) {
    case actions.SET_CANDY:
      return assoc('candy');
    case actions.SET_SNAKE:
      return assoc('snake');
    case actions.SET_PLAYERS:
      return assoc('players');
    case actions.SET_MESSAGE:
      return assoc('message');
    default:
      return state;
  }
}
