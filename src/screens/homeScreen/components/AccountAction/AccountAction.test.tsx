import React from 'react';
import { renderWithTheme } from '../../../../__tests__/helpers';
import AccountAction from './AccountAction';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(<AccountAction label="My Point" />);

  expect(tree).toMatchSnapshot();
});
