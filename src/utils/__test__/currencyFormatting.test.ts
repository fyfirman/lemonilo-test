import format from '@utils/currencyFormatting';

it('should convert 9999999 to 9.999.999', () => {
  expect(format(9999999)).toStrictEqual('9.999.999');
});
