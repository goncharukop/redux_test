import React, { useState } from 'react';
import { createStore } from 'redux';
import './Basket.scss';
import { rootReducer } from '../../redux/rootReducer';
import { decrement, increment } from '../../redux/actions';

const store = createStore(rootReducer, 0);

const handleAdd = () => store.dispatch(increment());
const handleSub = () => store.dispatch(decrement());

const basketProducts = [];

export const addInBasket = (title, price, id) => {
  if (!basketProducts.some(product => product.id === id)) {
    basketProducts.push(
      {
        title,
        price,
        id,
      },
    );
  }

  // eslint-disable-next-line no-console
  console.log(basketProducts);

  return basketProducts;
};

// eslint-disable-next-line no-console
store.subscribe(() => console.log(store.getState()));

export const Basket = () => {
  const [counter, setCounter] = useState(store.getState());

  store.subscribe(() => setCounter(store.getState()));

  return (
    <div>
      <button
        className="ui button"
        type="button"
        onClick={handleAdd}
      >
        +
      </button>

      <span className="ui button blue">{counter}</span>

      <button
        className="ui button"
        type="button"
        onClick={handleSub}
      >
        -
      </button>
    </div>
  );
};
