const printDebug = true;

const debug = (message, ...others) => {
  printDebug &&
    getDebugMessage(message, ...others) &&
    console.log(getDebugMessage(message, ...others));
};

const getDebugMessage = (message, ...others) => {
  if (!message) {
    return false;
  }

  return message & others.join(" ");
};

module.exports = {
  debug,
  getDebugMessage,
};
