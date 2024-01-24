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

  set_data() {
    let preguntas = ["Dime tu nombre:", "Dime tu edad:"];

    let respuestas = [];

    let pregunta = (i) => console.log(`\n${preguntas[i]}`);

    process.stdin.on("data", (data) => {
      respuestas.push(data.toString().trim());

      if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
      } else {
        this.name = respuestas[0];
        this.edad = Number(respuestas[1]);
        this.saludar();
        process.exit();
      }
    });

    pregunta(0);
  }
}

module.exports = Persona;
