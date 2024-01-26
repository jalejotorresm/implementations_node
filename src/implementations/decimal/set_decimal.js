const { set_binario } = require("./set_binario");

exports.set_decimal = async () => {
  let binario = await set_binario();

  let decimal = 0;

  for (i = 0; i < binario.length; i++) {
    if (binario[i] === "0") {
      continue;
    }

    let numero = Math.pow(2, i);

    decimal += numero;
  }

  console.log(
    `\nEl binario ${binario
      .split("")
      .reverse()
      .join("")} convertido a decimal es: ${decimal}\n`
  );
};
