const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function getUserInput() {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ]);
}

function generateSVG(userInput) {
  let shape;

  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape');
      process.exit(1);
  }

  shape.setColor(userInput.shapeColor);

  return shape.render({ text: userInput.text, color: userInput.textColor });
}

async function saveSVGToFile(svg) {
  try {
    fs.writeFileSync('./examples/logo.svg', svg);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error('Error saving SVG:', err);
  }
}

async function main() {
  const userInput = await getUserInput();
  const svg = generateSVG(userInput);
  await saveSVGToFile(svg);
}

main();
