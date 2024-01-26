const { set_binario } = require("./set_binario");
const { set_decimal } = require("./set_decimal");

exports.binario = async () => {
  console.log("\n--- Conversor de Decimal a Binario ---\n");
  let dec_array = await set_decimal();
  set_binario(dec_array);
};
