import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import { Basket } from './components/Basket';
// import { Switch, Link, Route } from 'react-router-dom';
import { CardsList } from './components/CardsList';
import { products } from './components/data';

const test = 11;

export const App = () => (
  <div>
    <div className="app__basket">
      <button type="button" className="ui yellow button">
        CARD
      </button>
      {test === 11 && <p>Product in basket ...</p>}
    </div>

    <Basket />

    <div className="app__cards">
      <CardsList cards={products} />
    </div>
  </div>
);
