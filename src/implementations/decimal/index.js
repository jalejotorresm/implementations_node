const { set_decimal } = require("./set_decimal");

exports.decimal = async () => {
  console.log("\n--- Conversor de Binario a Decimal ---\n");
  await set_decimal();
};
