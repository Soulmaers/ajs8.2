import ArrayBufferConverter, { getBuffer } from '../app';

test('проверка load', () => {
  const buffer = getBuffer();
  const arrayBuf = new ArrayBufferConverter();
  arrayBuf.load(buffer);

  expect(arrayBuf.buffer).toBe(buffer);
});

test('проверка строки', () => {
  const buffer = getBuffer();
  const arrayBuf = new ArrayBufferConverter();
  arrayBuf.load(buffer);

  const res = arrayBuf.toString();
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(res).toBe(result);
});
