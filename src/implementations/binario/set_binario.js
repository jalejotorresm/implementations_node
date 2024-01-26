const { set_decimal } = require("./set_decimal");

exports.set_binario = async () => {
  let array = await set_decimal();

  return array;
};
