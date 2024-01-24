const input = require("input");

const set_numero = async () => {
  let numero = parseInt(
    await input.text("Dame un numero entero positivo para continuar:\n")
  );

  const verifier = /^[0-9]+$/;

  while (!verifier.test(numero)) {
    numero = parseInt(
      await input.text(
        "Respuesta errada. Dame un numero entero positivo por favor:\n"
      )
    );
  }

  return numero;
};

module.exports = set_numero;
