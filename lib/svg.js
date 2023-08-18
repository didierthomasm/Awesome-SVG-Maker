const {Circle, Triangle, Square} = require("./shapes");

// Function that makes an instance of the selected shape
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

  shape.setColor(userInput["shapeColor"]);

  return shape.render({ text: userInput.text, color: userInput["textColor"] });
}

module.exports = generateSVG;