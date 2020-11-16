import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
// import { Switch, Link, Route } from 'react-router-dom';
import { CardsList } from './components/CardsList';

const test = 11;

export const App = () => (
  <div>
    <div className="app__basket">
      <button type="button" className="ui yellow button">
        CARD
      </button>
      {test === 11 && <p>Product in basket ...</p>}
    </div>

    <div className="app__cards">
      <CardsList />
    </div>
  </div>
);
