const fs = require('fs');

/**
 * Writes content to a file specified by the file path.
 * 
 * @param {string} filePath - Path to the file.
 * @param {string} content - Content to write.
 */

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
/**
 * Reads content from a file specified by the file path.
 * 
 * @param {string} filePath - Path to the file.
 * @returns {string} - Content of the file.
 */
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}



  module.exports = { writeFile, readFile,  };