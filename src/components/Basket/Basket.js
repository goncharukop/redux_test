import React, { useState } from 'react';
import { createStore } from 'redux';
import './Basket.scss';
import PropTypes from 'prop-types';
import { rootReducer } from '../../redux/rootReducer';
import { decrement, increment } from '../../redux/actions';

const basketProducts = [];

const store = createStore(rootReducer, 1);
const store2 = createStore(rootReducer, basketProducts);

const handleAdd = () => store.dispatch(increment());
const handleSub = () => store.dispatch(decrement());

export const handleAddItem = (title, price, description, image, id) => {
  addInBasket(title, price, description, image, id);

  store2.dispatch(
    {
      type: 'ADD_ITEM',
      array: basketProducts,
    },
  );
};

export const addInBasket = (title, price, description, image, id) => {
  if (!basketProducts.some(product => product.id === id)) {
    basketProducts.push(
      {
        title,
        price,
        description,
        image,
        id,
      },
    );
  }

  // eslint-disable-next-line no-console
  console.log(basketProducts, store2.getState());

  return basketProducts;
};

const BasketItem = ({
  id,
  image,
  title,
  description,
  price,
}) => {
  const [counter, setCounter] = useState(store.getState());

  store.subscribe(() => setCounter(store.getState()));

  return (
    <div className="basket-card">
      <div className="basket-card__content">
        <img
          src={image}
          className="basket-card__image"
          alt="product logo"
        />

        <div className="basket-card__text">
          <div>
            <h2>{title}</h2>
          </div>

          <div>
            {description}
          </div>
          <h3>
            {`Price: `}
            {price}
          </h3>
        </div>
      </div>

      <div className="basket-card__btn">
        <button
          className="ui button"
          type="button"
          onClick={handleAdd}
        >
          +
        </button>

        <span className="basket-card__counter">{counter}</span>

        <button
          className="ui button"
          type="button"
          onClick={handleSub}
        >
          -
        </button>
      </div>
    </div>
  );
};

export const Basket = () => {
  const [order, setOrder] = useState(store2.getState());

  store2.subscribe(() => setOrder(store2.getState()));

  return (
    <div className="basket">
      <div className="basket__field">
        { order.map(product => (
          <BasketItem key={product.id} {...product} />
        ))}
      </div>

      <div className="basket__form">
        <form>
          <input />
        </form>
      </div>
    </div>
  );
};

BasketItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
