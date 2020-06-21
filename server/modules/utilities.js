const printDebug = true;

const debug = (message, ...others) => {
  printDebug && console.log(message, others.join(" "));
};

module.exports = {
  debug,
};
