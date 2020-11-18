import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { Basket } from './components/Basket';
// import { Switch, Link, Route } from 'react-router-dom';
import { CardsList } from './components/CardsList';
import { products } from './components/data';

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [order2, setOrder2] = useState();

  return (
    <div>
      <div className="app__basket">
        <button type="button" className="ui yellow button">
          CARD
        </button>
      </div>

      <Basket />

      <div className="app__cards">
        <CardsList cards={products} />
      </div>
    </div>
  );
};
