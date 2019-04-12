import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import Users from './Users';

import './App.scss';
import { User } from './api/User.type';

const userList: User[] = [
  {
    id: 'GUUID-1',
    name: 'John',
    lastName: 'Doe',
    phone: '0777665544',
  },
  {
    id: 'GUUID-2',
    name: 'Johnathan',
    lastName: 'Donald',
    phone: '0777665543',
  },
];

const App: React.FunctionComponent = () => (
  <div className="app">
    <Header />
    <div className="app__content">
      <Users users={userList} />
    </div>
    <Footer />
  </div>
);

export default App;
