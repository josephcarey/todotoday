const { getDebugMessage } = require("../modules/utilities");

describe("getDebugMessage() function", () => {
  test("If it is called without arguments it should return false", () => {
    const testMessage = false;
    expect(getDebugMessage()).toBe(false);
  });
});
