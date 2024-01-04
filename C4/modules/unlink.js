const fs = require('fs');

const unlinkFile = (filename) => {
  return new Promise((pass, fail) => {
    fs.unlink(filename, (err) => {
      if (err) return fail(err);
      return pass();
    });
  });
};

module.exports = { unlinkFile };
