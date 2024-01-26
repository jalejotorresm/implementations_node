const { set_decimal } = require("./set_decimal");

exports.set_binario = async (dec_array) => {
  let base = dec_array[0];
  let numero = dec_array[1];
  let binario = "";

  while (base > 0) {
    binario = (base % 2) + binario;
    base = Math.floor(base / 2);
  }

  console.log(`\nEl numero ${numero} en binario es: ${binario}\n`);
};
