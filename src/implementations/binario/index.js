const { set_binario } = require("./set_binario");
const { set_decimal } = require("./set_decimal");

exports.binario = async () => {
  let dec_array = await set_decimal();
  set_binario(dec_array);
};
