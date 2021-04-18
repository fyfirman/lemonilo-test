import React from 'react';
import { renderWithTheme } from '../../__tests__/helpers';
import UnderConstruct from './UnderConstruct';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(<UnderConstruct />);

  expect(tree).toMatchSnapshot();
});
