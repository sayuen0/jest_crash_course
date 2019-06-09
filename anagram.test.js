const isAnagram = require("./anagram");



test("isAnagram が定義されている", () => {
  expect(typeof isAnagram).toEqual("function");
});

test(" 'cinema' は icemanのアナグラムである", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("'Dormitory' は 'dirty room###'のアナグラムである(記号を除き)", () => {
  expect(isAnagram("Dormitory", "dirty room###")).toBeTruthy();
});
test("'Hello' は 'Aloha'のアナグラムでない(記号を除き)", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
