// Imports of all the functions
const generateSVG = require('./lib/svg');
const getUserInput = require('./lib/input');
const saveSVGToFile = require('./lib/saveFile');

// Main function to make all happen
async function main() {
  const userInput = await getUserInput();
  const svg = generateSVG(userInput);
  await saveSVGToFile(svg);
}


main();