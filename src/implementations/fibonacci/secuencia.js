const { input } = require("@inquirer/prompts");

exports.secuencia = async () => {
  const mensaje = "Cuantos numeros de la secuencia quieres ver:\n";
  let base = await input({ message: mensaje });
  const regex = /^[0-9]+$/;

  while (!regex.test(base)) {
    base = await input({
      message:
        "Informacion errada. Necesito un numero positivo para continuar: ",
    });
  }

  const secuencia = [];

  for (i = 0; i < Number(base); i++) {
    secuencia.push(1);
  }

  return secuencia;
};
