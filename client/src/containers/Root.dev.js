import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';
// import DevTools from './DevTools';

module.exports = class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    );
  }
};
