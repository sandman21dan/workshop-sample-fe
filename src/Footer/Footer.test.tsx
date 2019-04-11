import * as React from 'react';
import { shallow } from 'enzyme';

import Footer from './';

it('renders correctly', () => {
  const component = shallow(<Footer />);

  expect(component).toMatchSnapshot();
});
