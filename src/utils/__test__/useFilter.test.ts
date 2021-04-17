import { renderHook } from '@testing-library/react-hooks';
import useFilter from '@utils/useFilter';

const initialData = [
  {
    name: 'First data',
    category: 'a',
    subAttribute: {
      id: 1,
    },
  },
  {
    name: 'Second data',
    category: 'b',
    subAttribute: {
      id: 2,
    },
  },
  {
    name: 'Third data',
    category: 'a',
    subAttribute: {
      id: 1,
    },
  },
];

it('should use filter', () => {
  const { result } = renderHook(() => useFilter(initialData, 'subAttribute.id'));

  expect(result.current[0]).toBe(initialData);
  expect(typeof result.current[1]).toBe('function');
});

it.skip('should filter data depends on category', () => {
  const { result } = renderHook(() => useFilter(initialData, 'category'));

  expect(data).toBe([
    {
      name: 'First data',
      category: 'a',
      subAttribute: {
        id: 1,
      },
    },
    {
      name: 'Third data',
      category: 'a',
      subAttribute: {
        id: 1,
      },
    },
  ]);
});

it.skip('should filter data with sub attribute', () => {
  const [data, setFilter] = renderHook(() => useFilter(initialData, 'subAttribute.id'));
});
