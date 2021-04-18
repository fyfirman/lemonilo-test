import React from 'react';
import { renderWithTheme } from '../../../../__tests__/helpers';
import Menu from './Menu';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(<Menu onPress={jest.fn} />);

  expect(tree).toMatchSnapshot();
});
