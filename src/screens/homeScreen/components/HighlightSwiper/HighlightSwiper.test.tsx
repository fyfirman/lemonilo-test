import React from 'react';
import hotels from '@assets/mock/hotels.json';
import { renderWithTheme } from '../../../../__tests__/helpers';
import HighlightSwiper from './HighlightSwiper';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(<HighlightSwiper data={hotels} onPress={jest.fn} />);

  expect(tree).toMatchSnapshot();
});
