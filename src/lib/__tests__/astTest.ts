import { dts } from '../ast';

describe('ast', () => {
  describe('dts', () => {
    it('includes MessageKey type definition', () => {
      const keys = [
        { key: 'foo', value: 'foo-val', interpolations: [] },
        { key: 'bar', value: 'bar-val', interpolations: [] },
        { key: 'baz', value: 'baz-val', interpolations: [] },
      ];
      const result = dts(keys);
      const expected = `type MessageKey =
  | "foo"
  | "bar"
  | "baz";`;
      expect(result.includes(expected)).toBeTruthy();
    });
  });
});
