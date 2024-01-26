const { input } = require("@inquirer/prompts");

exports.set_binario = async () => {
  let base_binario = await input({
    message: "Dame el numero binario a convertir:\n",
  });

  while (!/^[01]+$/.test(base_binario)) {
    console.log();
    base_binario = await input({
      message: "Informacion errada. Dame un numero binario valido por favor:\n",
    });
  }

  return base_binario.split("").reverse().join("");
};
