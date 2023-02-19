import * as Target from '.';

describe('decode', () => {
  test('base64でデコード', () =>
    expect(Target.decode('QUJD', 'base64')).toBe('ABC'));
  test('不明なエンコード方式', () =>
    expect(() => Target.decode('QUJD', 'Unknown')).toThrowError());
});
