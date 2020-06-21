const { getDebugMessage } = require("../modules/utilities");

describe("getDebugMessage() function", () => {
  test("If it is called without arguments it should return false", () => {
    expect(getDebugMessage()).toBe(false);
  });
});
