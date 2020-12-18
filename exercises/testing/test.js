const { fixId } = require("./users");
// write some tests
describe("users", () => {
  test("fixId", () => {
    expect(fixId("200")).toBe(200);
  });
});
