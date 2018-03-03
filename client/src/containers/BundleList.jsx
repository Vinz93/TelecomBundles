import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class BundleList extends Component {

  componentWillMount() {
  }

  fetch() {
  }
  render() {
    return (
      <div className="bundle-list">
        bundle list
      </div>
    );
  }
}

BundleList.propTypes = {
  bundles: PropTypes.array.isRequired,
};

const mapStateToProps = ({ bundles }) => ({
  bundles,
});

export default connect(mapStateToProps)(BundleList);
