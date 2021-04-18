import React from 'react';
import { renderWithTheme } from '../../../../__tests__/helpers';
import HighlightItem from './HighlightItem';
import 'jest-styled-components';

test('should match with snapshot', () => {
  const data = {
    name: 'Joy N Fun Festival City Link',
    imageUri:
      'https://ik.imagekit.io/tvlk/xpe-asset/AyJ40ZAo1DOyPyKLZ9c3RGQHTP2oT4ZXW+QmPVVkFQiXFSv42UaHGzSmaSzQ8DO5QIbWPZuF+VkYVRk6gh-Vg4ECbfuQRQ4pHjWJ5Rmbtkk=/2001871272969/Joy%2520N%2520Fun%2520Festival%2520City%2520Link-61055bfc-c44e-4588-a66a-b99d86b7ba4f.jpeg?_src=imagekit&tr=c-at_max,h-1280,q-60,w-720',
    price: 48500,
  };

  const tree = renderWithTheme(
    <HighlightItem
      imageUri={data.imageUri}
      name={data.name}
      onPress={jest.fn}
      price={data.price}
    />,
  );

  expect(tree).toMatchSnapshot();
});
