const utilities = require("../modules/utilities");

const consoleLogSpy = jest.spyOn(console, "log");

if (!utilities.getPrintDebug()) {
  describe("debugging is turned off", () => {
    test("getPrintDebug() returns false", () => {
      expect(utilities.getPrintDebug()).toBe(false);
    });
  });
} else {
  // eslint-disable-next-line max-lines-per-function
  describe("debug() function (with getPrintDebug forced true):", () => {
    test("If called empty, it should do nothing", () => {
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });
    test("If called with single message, that message", () => {
      const message = "some cats are better than other cats";
      utilities.debug(message);
      expect(consoleLogSpy).toHaveBeenCalledWith(message);
    });
    test("If called with two messages, those with spaces", () => {
      const message1 = "some cats are better than other cats";
      const message2 = "but all dogs are moderately cool";
      utilities.debug(message1, message2);
      expect(consoleLogSpy).toHaveBeenCalledWith(message1 + " " + message2);
    });
    test("If called with many messages, those with spaces", () => {
      const message1 = "some cats are better than other cats";
      const int1 = 444;
      const message2 = "but all dogs are moderately cool";
      const int2 = 555;
      utilities.debug(message1, int1, message2, int2);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        message1 + " " + int1 + " " + message2 + " " + int2
      );
    });
  });

  // eslint-disable-next-line max-lines-per-function
  describe("getDebugMessage() function:", () => {
    test("without arguments it should return false", () => {
      expect(utilities.getDebugMessage()).toBe(false);
    });
    test("with one empty string it should return an empty string", () => {
      expect(utilities.getDebugMessage("")).toBe("");
    });
    test("with one message should return that message", () => {
      const message = "cats are cool";
      expect(utilities.getDebugMessage(message)).toBe(message);
    });
    test("with two args those two with a space", () => {
      const message1 = "dogs are cool";
      const int1 = 100;
      expect(utilities.getDebugMessage(message1, int1)).toBe(
        message1 + " " + int1
      );
    });
    test("with several messages or variables, return those with spaces", () => {
      const message1 = "dogs are cool";
      const message2 = "but not as cool as cats";
      const int1 = 100;
      const int2 = 200;
      expect(utilities.getDebugMessage(message1, message2, int1, int2)).toBe(
        message1 + " " + message2 + " " + int1 + " " + int2
      );
    });
  });
}
