const { Triangle, Square, Circle } = require('./shapes');

describe('Shape Rendering', () => {
  const userText = {
    text: 'ABC',
    color: 'black',
  };

  it('should render a triangle with the specified color', () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.render(userText)).toEqual('<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">\n' +
      '  <polygon points="150,50 100,150 200,150" fill="red" />\n' +
      `  <text x="150" y="150" fill="${userText.color}" font-size="48" text-anchor="middle" dy="0.35em">${userText.text}</text>\n` +
      '</svg>');
  });

  it('should render a square with the specified color', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render(userText)).toEqual('<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">\n' +
      '  <rect x="50" y="50" width="100" height="100" fill="blue" />\n' +
      `  <text x="150" y="150" fill="${userText.color}" font-size="48" text-anchor="middle" dy="0.35em">${userText.text}</text>\n` +
      '</svg>');
  });

  it('should render a circle with the specified color', () => {
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render(userText)).toEqual('<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">\n' +
      '  <circle cx="150" cy="150" r="100" fill="green" />\n' +
      `  <text x="150" y="150" fill="${userText.color}" font-size="48" text-anchor="middle" dy="0.35em">${userText.text}</text>\n` +
      '</svg>');
  });
});
