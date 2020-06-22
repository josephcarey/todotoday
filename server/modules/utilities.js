const getPrintDebug = () => {
  return true;
};

const debug = (message, ...others) => {
  getPrintDebug() &&
    getDebugMessage(message, ...others) &&
    console.log(getDebugMessage(message, ...others));
};

// const debug = (message) => {
//   console.log(message);
// };

const getDebugMessage = (message, ...others) => {
  if (message == null) {
    return false;
  }

  return others.length === 0 ? message : message + " " + others.join(" ");
};

module.exports = {
  getPrintDebug,
  debug,
  getDebugMessage,
};
