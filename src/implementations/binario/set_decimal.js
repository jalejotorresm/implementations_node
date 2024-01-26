const { input } = require("@inquirer/prompts");

exports.set_decimal = async () => {
  let numero = await input({ message: "Ingresa el numero a convertir:\n" });

  while (!/^[0-9]+$/.test(numero)) {
    console.log();
    numero = await input({
      message:
        "Informacion incorrecta. Ingresa un numero positivo por favor:\n",
    });
  }

  let base = Number(numero);

  let final = [base, Number(numero)];

  return final;
};
