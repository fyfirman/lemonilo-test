import React from 'react';
import hotels from '@assets/mock/hotels.json';
import { renderWithTheme } from '../../../../__tests__/helpers';
import FilterableSwiper from './FilterableSwiper';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const tree = renderWithTheme(
    <FilterableSwiper
      filterBy="city.id"
      filterOptions={[
        { key: 1, label: 'Bandung' },
        { key: 5, label: 'Surabaya' },
        { key: 3, label: 'Jakarta Pusat' },
        { key: 2, label: 'Jakarta Timur' },
        { key: 4, label: 'Jakarta Selatan' },
      ]}
      data={hotels}
      onPress={jest.fn}
    />,
  );

  expect(tree).toMatchSnapshot();
});
