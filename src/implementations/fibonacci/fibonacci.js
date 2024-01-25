const { secuencia } = require("./secuencia");

exports.set_fibonacci = async () => {
  const base = await secuencia();

  for (i = 2; i < base.length; i++) {
    base[i] = base[i - 2] + base[i - 1];
  }

  console.log(
    `\nLos primeros ${base.length} numeros de la secuencia Fibonacci son: `
  );

  for (let i = 0; i < base.length; i++) {
    if (i < base.length - 2) {
      process.stdout.write(`${base[i]}, `);
    } else if (i === base.length - 2) {
      process.stdout.write(`${base[i]} y `);
    } else {
      process.stdout.write(`${base[i]}.\n`);
    }
  }

  console.log();
};
