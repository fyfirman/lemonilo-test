import React from 'react';
import { renderWithTheme } from '../../__tests__/helpers';
import SearchBar from './SearchBar';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const onPress = jest.fn();
  const tree = renderWithTheme(<SearchBar onPress={onPress} />);

  expect(tree).toMatchSnapshot();
});
