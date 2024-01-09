const fs = require('fs');

exports.fileRead = (filename) => {
  return new Promise((pass, fail) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) return fail(err);
      return pass(data);
    });
  });
};

exports.fileWrite = (filename, data) => {
  return new Promise((res, fail) => {
    fs.writeFile(filename, data, 'utf-8', (err) => {
      if (err) return fail(err);
      return res();
    });
  });
};
