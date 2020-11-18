import React from 'react';
import './CardsList.scss';
import PropTypes from 'prop-types';
import { Card } from '../Card';

export const CardsList = ({
  cards = [],
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
