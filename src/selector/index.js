const { options } = require("./options");
const { persona } = require("../implementations/persona");
const { factorial } = require("../implementations/factorial");

exports.selector = async () => {
  const programa = await options();

  switch (programa) {
    case "persona":
      persona();
      break;

    case "factorial":
      factorial();
      break;

    default:
      console.log(programa);
  }
};
