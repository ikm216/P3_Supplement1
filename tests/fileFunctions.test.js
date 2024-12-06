const { writeFile, readFile, countLines } = require('../fileFunctions');
const fs = require('fs');
const path = require('path');


const testFilePath = path.join(__dirname, 'testFile.txt');

describe('File Operations Tests', () => {
  afterAll(() => {
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  test('should write content to a file', () => {
    writeFile(testFilePath, 'Grind it Out!');
    expect(fs.existsSync(testFilePath)).toBe(true);
  });
});