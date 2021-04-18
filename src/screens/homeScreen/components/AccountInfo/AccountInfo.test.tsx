import React from 'react';
import { renderWithTheme } from '../../../../__tests__/helpers';
import AccountInfo from './AccountInfo';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(<AccountInfo />);

  expect(tree).toMatchSnapshot();
});
