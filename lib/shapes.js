// Super class that inherits a property and a method
class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

// Class for the circle shape
class Circle extends Shape{
  constructor() {
    super();
  }

  render(userText) {
    return `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="100" fill="${this.color}" />
      <text x="150" y="150" fill="${userText.color}" font-size="48" text-anchor="middle" dy="0.35em">${userText.text}</text>
    </svg>`;
  }
}

// Class for the triangle shape
class Triangle extends Shape{
  constructor() {
    super();
  }

  render(userText) {
    return `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,80 100,180 200,180" fill="${this.color}" />
      <text x="150" y="165" fill="${userText.color}" font-size="40" text-anchor="middle" dy="0.35em">${userText.text}</text>
    </svg>`;
  }
}

// Class for the square shape
class Square extends Shape{
  constructor() {
    super();
  }

  render(userText) {
    return `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="100" height="100" fill="${this.color}" />
      <text x="100" y="100" fill="${userText.color}" font-size="40" text-anchor="middle" dy="0.35em">${userText.text}</text>
    </svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
