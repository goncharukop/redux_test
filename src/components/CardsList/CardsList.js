import React from 'react';
import './CardsList.scss';
import PropTypes from 'prop-types';
import { Card } from '../Card';
import { products } from '../data';

export const CardsList = ({
  cards = products,
}) => (
  <div className="cards">
    {cards.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
