import React, { Component } from 'react';
import Footer from '../components/Footer';
import BundleList from './BundleList.jsx';

class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Telecom bundles combinations</div>
        <BundleList />
        <Footer />
      </div>
    );
  }
}

export default App;
