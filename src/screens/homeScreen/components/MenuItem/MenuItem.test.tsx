import React from 'react';
import { renderWithTheme } from '../../../../__tests__/helpers';
import MenuItem from './MenuItem';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const data = { label: 'Flight', iconName: 'airplane', color: '#2FC6F3' };

  const tree = renderWithTheme(
    <MenuItem iconName={data.iconName} label={data.label} onPress={jest.fn} width={60} />,
  );

  expect(tree).toMatchSnapshot();
});
