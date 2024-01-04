const fs = require('fs');

const delDir = (path, dir) => {
  return new Promise((pass, fail) => {
    fs.rmdir((path, dir), (err) => {
      if (err) return fail(console.error('Folder not deleted!'));
      console.log('Folder deleted!');
      return pass();
    });
  });
};

module.exports = { delDir };
