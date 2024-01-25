const { options } = require("./options");
const { persona } = require("../implementations/persona");
const { factorial } = require("../implementations/factorial");
const { fibonacci } = require("../implementations/fibonacci");
//const { binario } = require("../implementations/binario")
//const { decimal } = require("../implementations/decimal")

exports.selector = async () => {
  const programa = await options();

  switch (programa) {
    case "persona":
      persona();
      break;

    case "factorial":
      factorial();
      break;

    case "fibonacci":
      fibonacci();
      break;

    /*case "binario":
      binario();
      break;

    case "decimal":
      decimal()
      break;*/
  }
};
