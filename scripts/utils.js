//import Signale from "signale";

const options = {
  types: {
    error: {
      badge: "!!",
      label: "fatal error",
    },
    success: {
      badge: "✨",
      label: "Component written successfully:",
    },
  },
};

//export const signale = new Signale(options);
export const titleToFilename = (title) =>
  title
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/\+/g, "plus")
    .replace(/^\./, "dot-")
    .replace(/\.$/, "-dot")
    .replace(/\./g, "-dot-")
    .replace(/^&/, "and-")
    .replace(/&$/, "-and")
    .replace(/&/g, "-and-")
    .replace(/[ !’]/g, "")
    .replace(/à|á|â|ã|ä/, "a")
    .replace(/ç/, "c")
    .replace(/è|é|ê|ë/, "e")
    .replace(/ì|í|î|ï/, "i")
    .replace(/ñ/, "n")
    .replace(/ò|ó|ô|õ|ö/, "o")
    .replace(/ù|ú|û|ü/, "u")
    .replace(/ý|ÿ/, "y")
    .replace(/500px/, "fiveHundredPx")
    .replace(/1password/, "onePassword")
    .replace(/1001tracklists/, "OneThousandOneTracklists")
    .replace(/micro:bit/, "MicroBit")
    .replace(/^365/, "threeHundredSixtyFive-")
    .replace(/365$/, "-threeHundredSixtyFive")
    .replace(/365/g, "-threeHundredSixtyFive-")
    .replace(/^42/, "fortyTwo-")
    .replace(/42$/, "-fortyTwo")
    .replace(/42/g, "-fortyTwo-")
    .replace(/^26/, "twentySix-")
    .replace(/26$/, "-twentySix")
    .replace(/26/g, "-twentySix-")
    .replace(/^2/, "two-")
    .replace(/2$/, "-two")
    .replace(/2/g, "-two-")
    .replace(/^3/, "three-")
    .replace(/3$/, "-three")
    .replace(/3/g, "-three-")
    .replace(/^4/, "four-")
    .replace(/4$/, "-four")
    .replace(/4/g, "-four-")
    .replace(/^6/, "six-")
    .replace(/6$/, "-six")
    .replace(/6/g, "-six-")
    .replace(/^24/, "twenty-four-")
    .replace(/24$/, "-twenty-four")
    .replace(/24/g, "-twenty-four-")
    .replace(/tado°/, "Tado");
