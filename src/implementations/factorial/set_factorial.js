const { set_numero } = require("./set_numero");

const set_factorial = (num) => {
  let resultado = 1n;

  for (let i = 2n; i <= BigInt(num); i++) {
    resultado *= i;
  }

  console.log(`\nEl factorial de ${num} es: ${resultado}\n`);
};

exports.print_factorial = async () => {
  const prueba = BigInt(await set_numero());
  set_factorial(prueba);
};
