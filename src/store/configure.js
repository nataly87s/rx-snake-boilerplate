import { createStore } from 'redux';
import reducer from './reducer';

export default function () {
  return createStore(
    reducer,
    {},
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f,
  );
}
