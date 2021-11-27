import sumOfTwoNumber from './sumOfTwoNumber';

test('should add two numbers', () => {
  const sum = sumOfTwoNumber(3, 4);
  expect(sum).toBe(7);
});

test('should return 0', () => {
  expect(sumOfTwoNumber('', '')).toBe(0);
});

test('plus two number', async () => {
  expect(2 + 3).toBe(5);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('throw', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

test('await', async () => {
  async function fetchData() {
    return new Promise((res, rej) => {
      setTimeout(() => rej('error'), 1000);
    });
  }
  await expect(fetchData()).rejects.toMatch('error');
});

test('mock', () => {
  function forEach(items, cb) {
    for (let i = 0; i < items.length; i++) {
      cb(items[i]);
    }
  }

  const mockCb = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCb);

  expect(mockCb.mock.calls.length).toBe(2);
  expect(mockCb.mock.calls[0][0]).toBe(0);
  expect(mockCb.mock.calls[1][0]).toBe(1);
  expect(mockCb.mock.results[0].value).toBe(42);
  expect(mockCb.mock.results[1].value).toBe(43);
});
