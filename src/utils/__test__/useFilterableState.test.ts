import { act, renderHook } from '@testing-library/react-hooks';
import useFilterableState from '@utils/useFilterableState';

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
  const { result } = renderHook(() => useFilterableState(initialData, 'subAttribute.id'));
  const { data, setFilter, filter } = result.current;

  expect(data).toBe(initialData);
  expect(typeof setFilter).toBe('function');
  expect(filter).toBe(null);
});

it('should filter data depends on category', () => {
  const { result } = renderHook(() => useFilterableState(initialData, 'category'));

  act(() => {
    result.current.setFilter('a');
  });

  expect(result.current.data).toStrictEqual([
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

it('should filter data with sub property', () => {
  const { result } = renderHook(() => useFilterableState(initialData, 'subAttribute.id'));

  act(() => {
    result.current.setFilter(2);
  });

  expect(result.current.data).toStrictEqual([{
    name: 'Second data',
    category: 'b',
    subAttribute: {
      id: 2,
    },
  }]);
});
