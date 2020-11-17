import { INCREMENT, DECREMENT } from './types';

export function rootReducer(state, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  if (action.type === DECREMENT) {
    if (state > 0) {
      return state - 1;
    }
  }

  return state;
}
