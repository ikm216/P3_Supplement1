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

  test('should read content from a file', () => {
    const content = 'Chicken On Me';
    fs.writeFileSync(testFilePath, content);
    const readContent = readFile(testFilePath);
    expect(readContent).toBe(content);
  });

  test('should count the number of lines in the file', () => {
    const content = "Chicken\nIn\nThe\nCoop\n"
    fs.writeFileSync(testFilePath, content);
    const lineCount = countLines(testFilePath)
    expect(lineCount).toBe(4)
  })
});