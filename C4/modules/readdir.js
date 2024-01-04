const fs = require('fs');

const readDir = (path) => {
  return new Promise((pass, fail) => {
    fs.readdir(path, 'utf-8', (err, files) => {
      if (err) return fail(err);
      return pass(files);
    });
  });
};

module.exports = { readDir };
