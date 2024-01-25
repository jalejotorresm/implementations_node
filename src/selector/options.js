const { select, Separator } = require("@inquirer/prompts");

exports.options = async () => {
  const mensaje = "Selecciona la opcion que deseas explorar:";

  const choices = [
    {
      name: "Calculo de Secuencia de Fibonacci",
      value: "fibonacci",
      description:
        "Basado en un numero, se calcula ese numero de posiciones de la Secuencia de Fibonacci",
    },
    {
      name: "Implementacion de Persona",
      value: "persona",
      description:
        "Crea un objeto de persona con tu nombre y edad y hazlo saludar",
    },
    {
      name: "Conversor Decimal a Binario",
      value: "binario",
      description: "Convierte de un numero decimal a binario",
    },
    {
      name: "Conversor Binario a Decimal",
      value: "decimal",
      description: "Convierte de un numero binario a decimal",
    },
    {
      name: "Calculadora de Factoriales",
      value: "factorial",
      description: "Calcula el Factorial de un numero",
    },
    new Separator(),
  ];

  const seleccion = await select({ message: mensaje, choices });

  return seleccion;
};
