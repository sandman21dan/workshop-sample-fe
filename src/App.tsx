import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Users from './Users';

import './App.scss';

const App: React.FunctionComponent = () => (
  <div className="app">
    <Header />
    <div className="app__content">
      <Users />
    </div>
    <Footer />
  </div>
);

export default App;
