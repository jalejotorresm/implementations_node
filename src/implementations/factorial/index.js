const print_factorial = require("./set_factorial");

const factorial = () => {
  process.stdout.write("\n--- Calculadora de Factoriales ---\n");
  print_factorial();
};

module.exports = factorial;
