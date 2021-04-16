import arrayToMatrix from '../arrayToMatrix';

it('should be transform array to matrix', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const column = 3;

  const result = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ];
  expect(arrayToMatrix(array, column)).toStrictEqual(result);
});
