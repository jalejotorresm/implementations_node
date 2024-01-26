const { set_binario } = require("./set_binario");

exports.binario = async () => {
  console.log(await set_binario());
};
