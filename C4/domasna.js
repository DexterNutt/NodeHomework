/* 
    `fs.appendFileSync`
    `fs.unlink`,
    `fs.existsSync`,
    `fs.readdir`, 
    `fs.mkdir`, 
    `fs.rmdir,
    `fs.rename`
*/

const { appendFile } = require('./modules/append.js');
const { unlinkFile } = require('./modules/unlink');
const { doesFileExist } = require('./modules/exists.js');
const { readDir } = require('./modules/readdir.js');
const { makeDir } = require('./modules/mkdir.js');
const { delDir } = require('./modules/rmdir.js');
const { rename } = require('./modules/rename.js');

//! Append a file (appendFileSync)

appendFile('test.txt', 'test');

//! Delete a file (unlink)

const deleteFile = async (filename) => {
  try {
    await unlinkFile(filename);
    console.log('File Deleted!');
  } catch {
    console.log(err);
  }
};

deleteFile('test.txt');

//! Check if a file exists (existsSync)

doesFileExist('unlink.js');

//! Create a new Folder (Mkdir)

const createFolder = async (path, folder) => {
  try {
    await makeDir(path, folder);
  } catch (err) {
    console.error(err);
  }
};

createFolder('../modules', 'TestFolder');

//! Read Directory (readdir)
const readDirectory = async (path) => {
  try {
    const files = await readDir(path);
    console.log(`Files in directory: ${files}`);
  } catch (err) {
    console.log(err);
  }
};

readDirectory('./modules');

//! Delete a folder (rmdir)

const deleteFolder = async (path, folder) => {
  try {
    await delDir(path, folder);
  } catch (err) {
    console.error(err);
  }
};

deleteFolder('../modules', 'TestFolder');

//! Rename a file (rename)

const renameFile = async (name, newName) => {
  try {
    await rename(name, newName);
    console.log(`File ${name} renamed to ${newName} `);
  } catch (err) {
    console.log(err);
  }
};

renameFile('test.txt', 'new_test.txt');
