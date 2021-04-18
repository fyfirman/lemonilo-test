import React from 'react';
import { renderWithTheme } from '../../../../__tests__/helpers';
import FilterButton from './FilterButton';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(<FilterButton onPress={jest.fn} title="Button" />);

  expect(tree).toMatchSnapshot();
});
