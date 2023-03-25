import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
