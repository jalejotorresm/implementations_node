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

    while (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/u.test(this.name)) {
      console.log();
      this.name = await input({
        message: "Informacion incorrecta. Dime tu nombre por favor:\n",
      });
    }

    console.log();
    this.edad = await input({ message: "Dime tu edad:\n" });

    while (!/^[0-9]+$/.test(this.edad)) {
      console.log();
      this.edad = await input({
        message: "Informacion incorrecta. Dime tu edad por favor:\n",
      });
    }

    this.saludar();
  }
}

module.exports = Persona;
