import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as bundleActions from '../actions/bundles';
import Plan from '../components/Plan.jsx';

class BundleList extends Component {

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const { fetchBundles } = this.props;
    fetchBundles();
  }
  render() {
    const { bundles } = this.props;
    const list = bundles.map(({ plan, price }, i) => (
      <li key={i}>
        <Plan plan={plan}/>
        plan cost: {price}$
      </li>
    ));
    return (
      <ul className="bundle-list">
        {list}
      </ul>
    );
  }
}

BundleList.propTypes = {
  bundles: PropTypes.array.isRequired,
  fetchBundles: PropTypes.func,
};

const mapStateToProps = ({ bundles }) => ({
  bundles,
});

export default connect(mapStateToProps, bundleActions)(BundleList);
