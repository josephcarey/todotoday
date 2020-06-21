const printDebug = false;

const debug = (message) => {
  printDebug && console.log(message);
};

module.exports = {
  debug,
};
