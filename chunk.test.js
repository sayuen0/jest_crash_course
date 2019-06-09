const chunkArray = require("./chunk");

test("chunkArray が定義されている", () => {
  expect(chunkArray).toBeDefined();
});

test("10要素の配列を2個ずつにチャンク", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});
test("3要素の配列を1個ずつにチャンク", () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);
  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
