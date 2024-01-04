const fs = require('fs');

const makeDir = (path, dir) => {
  return new Promise((pass, fail) => {
    fs.mkdir((path, dir), { recursive: true }, (err) => {
      if (err) return fail(console.log('Folder not created!'));
      return pass();
    });
  });
};

module.exports = { makeDir };
