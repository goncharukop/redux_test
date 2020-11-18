import { INCREMENT, DECREMENT } from './types';

export function rootReducer(state, action) {
  if (action.type === INCREMENT) {
    return state + 1;
  }

  if (action.type === DECREMENT) {
    if (state > 1) {
      return state - 1;
    }
  }

  if (action.type === 'ADD_ITEM') {
    if (action.array.length > 0) {
      return [...action.array];
    }

    return [];
  }

  return state;
}
