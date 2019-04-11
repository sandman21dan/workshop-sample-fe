import * as React from 'react';

import Header from './';
import { shallow } from 'enzyme';

it('render correctly', () => {
  const component = shallow(<Header />);

  expect(component).toMatchSnapshot();
});
