import React, { PropTypes } from 'react';
const Plan = (props) => {
  const { plan } = props;
  const services = plan.map(service => {
    const { name } = service;
    return (
      <li className="service">
        {name}
      </li>
    );
  });
  return (
    <li className="plan">
      <ul>
        {services}
      </ul>
    </li>
  );
};

Plan.propTypes = {
  plan: PropTypes.array.isRequired,
};

export default Plan;
