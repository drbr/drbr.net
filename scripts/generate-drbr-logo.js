/*
INSTRUCTIONS:
With the DoctorBrandon TTF file in the same directory as the script, run the script.
It will generate an SVG file based on the rendered text and save it to the designated path.
*/

const FONT_PATH = 'scripts/DoctorBrandonSE.ttf';
const TEXT_TO_RENDER = ' DRBR.net';
const SVG_SAVE_FILE_PATH = 'src/assets/img/drbr-logo.svg';

const fs = require('fs');
const opentype = require('opentype.js');

const file = fs.readFileSync(FONT_PATH);
// Get ArrayBuffer from file, per
// https://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer/31394257#31394257
const arrayBuffer = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);

const font = opentype.parse(arrayBuffer);
const pathObject = font.getPath(TEXT_TO_RENDER, 0, 0, 72); // Font size is 72
const pathData = pathObject.toPathData({ flipY: true });

const boundingBox = pathObject.getBoundingBox();
const viewBoxString = `${boundingBox.x1} ${boundingBox.y1} ${boundingBox.x2 - boundingBox.x1} ${
  boundingBox.y2 - boundingBox.y1
}`;

const svgText = `<svg height="100%" viewBox="${viewBoxString}" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="${pathData}" fill="currentColor"/></svg>`;

fs.writeFileSync(SVG_SAVE_FILE_PATH, svgText);
