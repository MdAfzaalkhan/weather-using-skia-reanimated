/* eslint-disable prettier/prettier */
const fs = require('fs');
const path = require('path');

function convertLineEndings(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      convertLineEndings(filePath);
    } else if (stats.isFile() && (filePath.endsWith('.ts') || filePath.endsWith('.tsx'))) {
      const content = fs.readFileSync(filePath, 'utf8');
      const updatedContent = content.replace(/\r\n/g, '\n');
      fs.writeFileSync(filePath, updatedContent, 'utf8');
    }
  });
}

convertLineEndings(__dirname);
