import React, { PropTypes } from 'react';
const Plan = ({ plan }) => {
  const services = plan.map(({ name, id, price = 0 }) => (
    <li key={id} className="service">
      {name} <span className="currency">{price}$</span>
    </li>
  ));

  return (
    <ul className="plan">
      {services}
    </ul>
  );
};

Plan.propTypes = {
  plan: PropTypes.array.isRequired,
};

export default Plan;
