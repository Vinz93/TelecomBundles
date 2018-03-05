import React, { PropTypes } from 'react';
const Plan = ({ plan }) => {
  const services = plan.map(({ name, id, price = 0 }) => {
    return (
      <li key={id} className="service">
        {name} ({price}$)
      </li>
    );
  });
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
