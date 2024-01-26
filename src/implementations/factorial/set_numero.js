const { input } = require("@inquirer/prompts");

exports.set_numero = async () => {
  console.log();
  let numero = await input({
    message: "Dame un numero entero positivo para continuar:\n",
  });

  const verifier = /^[0-9]+$/;

  while (!verifier.test(numero.trim())) {
    console.log("");
    numero = await input({
      message: "Respuesta errada. Dame un numero entero positivo por favor:\n",
    });
  }

  return Number(numero);
};
