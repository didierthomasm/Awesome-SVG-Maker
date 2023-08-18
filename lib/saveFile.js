import fs from "fs";

async function saveSVGToFile(svg) {
  try {
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error('Error saving SVG:', err);
  }
}

module.exports = saveSVGToFile;