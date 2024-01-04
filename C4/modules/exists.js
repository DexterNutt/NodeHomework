const fs = require('fs');

const doesFileExist = (filename) => {
  if (fs.existsSync(filename)) return console.log(`${filename} exists`);
  return console.log(`${filename} does not exist`);
};

module.exports = { doesFileExist };
