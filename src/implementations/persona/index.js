const Persona = require("./data_persona.js");

exports.persona = () => {
  console.log("\n--- Implementacion Objetos y Metodos ---\n");

  let humano = new Persona("", 0);

  humano.set_data();
};
