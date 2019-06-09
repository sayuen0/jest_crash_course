const reverseString = require("./reverseString");

test("reverseString function がある", () => {
  expect(reverseString).toBeDefined();
});

test("文字列は逆転している", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("hello <=> olleH : 大文字小文字を区別せず逆転している", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
