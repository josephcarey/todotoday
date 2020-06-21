const printDebug = true;

const debug = (message, ...others) => {
  printDebug &&
    getDebugMessage(message, ...others) &&
    console.log(getDebugMessage(message, ...others));
};

const getDebugMessage = (message, ...others) => {
  return message & others.join(" ");
};

module.exports = {
  debug,
};
