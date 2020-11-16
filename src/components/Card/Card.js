import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

export const Card = ({
  image,
  title,
  description,
  price,
}) => (
  <div className="card">
    <div className="card__image">
      <figure>
        <img
          src={image}
          alt="product logo"
        />
      </figure>
    </div>
    <div className="card-content">
      <div>
        <h2>{title}</h2>
      </div>

      <div className="content">
        {description}
      </div>
      <br />
      <h3 className="content">
        {`Price: `}
        {price}
        <br />
      </h3>
      <br />
      <div className="card__btn">
        <button
          type="button"
          className="card__btn ui blue button"
        >
          BUY THIS
        </button>
      </div>
    </div>
  </div>
);

Card.propTypes = {

  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
