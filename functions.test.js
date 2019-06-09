const functions = require("./functions");

//最初と最後に
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());
const initDatabase = () => console.log("データベースを起動します...");
const closeDatabase = () => console.log("データベースを終了します");

describe("名前チェック", () => {
  beforeEach(() => nameCheck());

  test("User is Mito", () => {
    const user = "Mito";
    expect(user).toBe("Mito");
  });
  test("User is Kaede", () => {
    const user = "Kaede";
    expect(user).toBe("Kaede");
  });
  test("User is Rin", () => {
    const user = "Rin";
    expect(user).toBe("Rin");
  });
});

const nameCheck = () => console.log("名前をチェックします...");
// てすと

test("Add 2 + 3 to equal 5", () => {
  expect(functions.add(2, 3)).toBe(5);
});
// のっと
test("Add 2 + 3 to NOT equal 6", () => {
  expect(functions.add(2, 3)).not.toBe(6);
});
// ぬる
test("Should be null", () => {
  expect(functions.isNull()).toBe(null);
});

// ふぉるしー
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test("User should be akira kosuda object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "akira",
    lastName: "kosuda"
  });
});

// 大なりイコール　小なりイコール
test("1600以下", () => {
  const load1 = 800;
  const load2 = 700;
  expect(functions.add(load1, load2)).toBeLessThanOrEqual(1600);
});

// 正規表現
test("Iは含まれない", () => {
  expect("internet").not.toMatch(/I/);
});

// あれい
test("Adminがusernameに含まれる", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

test("フェッチしたユーザー名はLeanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
