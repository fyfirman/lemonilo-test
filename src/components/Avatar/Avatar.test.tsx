import React from 'react';
import { renderWithTheme } from '../../__tests__/helpers';
import Avatar from './Avatar';
import 'jest-styled-components';

const image = require('@assets/images/avataaars.png');

test('should renders correctly', () => {
  const tree = renderWithTheme(<Avatar source={image} />);

  expect(tree).toMatchSnapshot();
});
