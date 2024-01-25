const { input } = require("@inquirer/prompts");

class Persona {
  constructor(name, edad) {
    this.name = name;
    this.edad = edad;
  }

  saludar() {
    console.log(
      `\nHola, eres ${this.name} y tienes ${this.edad} años de edad.\n`
    );
  }

  async set_data() {
    this.name = await input({ message: "Dime tu nombre:\n" });
    console.log();
    this.edad = await input({ message: "Dime tu edad:\n" });

    this.saludar();
  }
}

module.exports = Persona;
