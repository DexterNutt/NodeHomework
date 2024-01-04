const fs = require('fs');

const rename = (oldName, newName) => {
  return new Promise((pass, fail) => {
    fs.rename(oldName, newName, (err) => {
      if (err) return fail(err);
      return pass();
    });
  });
};

module.exports = { rename };
