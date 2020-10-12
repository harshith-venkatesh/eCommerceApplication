import React from "react";
import PropTypes from "prop-types";
const Rating = ({ value, text, color }) => {
  const ratings = [];
  for (let j = 1; j <= 5; j++) {
    ratings.push(
      <span key={j}>
        <i
          style={{ color }}
          className={
            value >= j
              ? "fas fa-star"
              : value >= j - 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    );
  }
  return (
    <div className="rating">
      {ratings}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
export default Rating;
