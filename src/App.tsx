import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

import './App.scss';

const App: React.FunctionComponent = () => (
  <div className="app">
    <Header />
    <div className="app__content">
      <p>Hello react!</p>
    </div>
    <Footer />
  </div>
);

export default App;
