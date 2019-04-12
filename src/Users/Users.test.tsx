import * as React from 'react';

import Users from './';
import { User } from '../api/User.type';
import { shallow } from 'enzyme';

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
  }
];

it('renders correctly with no users', () => {
  const component = shallow(<Users users={[]} />);

  expect(component).toMatchSnapshot();
});

it('renders correctly with users', () => {
  const component = shallow(<Users users={userList} />);

  expect(component).toMatchSnapshot();
});
