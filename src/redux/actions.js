import { ADD_ITEM, DECREMENT, INCREMENT } from './types';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function addItem() {
  return {
    type: ADD_ITEM,
  };
}
