import resolve from '@utils/resolveProperty';

it('should be return subproperty of value', () => {
  const object = {
    a: {
      b: {
        c: {
          d: 'foo',
        },
      },
    },
  };
  expect(resolve('a.b.c.d', object)).toStrictEqual('foo');
});
