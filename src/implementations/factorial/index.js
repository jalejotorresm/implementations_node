const { print_factorial } = require("./set_factorial");

exports.factorial = () => {
  process.stdout.write("\n--- Calculadora de Factoriales ---\n");
  print_factorial();
};
