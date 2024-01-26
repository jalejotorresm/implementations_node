const { input } = require("@inquirer/prompts");

exports.set_decimal = async () => {
  let numero = await input({ message: "Ingresa el numero a convertir:" });

  while (!/^[0-9]+$/.test(numero)) {
    numero = await input({
      message: "Informacion incorrecta. Ingresa un numero positivo por favor:",
    });
  }

  let base = Number(numero);

  let final = [base, Number(numero)];

  return final;
};