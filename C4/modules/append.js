const fs = require('fs');

const appendFile = (filename, data) => {
  return new Promise((pass, fail) => {
    fs.appendFileSync(filename, data, 'utf-8', (err) => {
      if (err) return fail(err);
      return pass();
    });
  });
};

module.exports = { appendFile };
