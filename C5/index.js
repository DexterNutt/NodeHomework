const modules = require('./modules.js');

//? student [ime, prezime, prosek, grad]
//?1 Dodavanje na student od  fajlot
//?2 Brishenje na student od fajlot
//?3 Menuvanje na podatooci na student od fajlot
//?4 Chitanje na site studenti od fajlot

//! Додавање студент во фајлот

const addStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    studentData.push({
      name: 'Ringo',
      surname: 'Starr',
      grade: 6.8,
      city: 'Bristol',
    });
    const studentJSON = JSON.stringify(studentData);
    await modules.fileWrite('./students.json', studentJSON);
    console.log('Student added');
  } catch (err) {
    console.log(err);
  }
};

addStudent();

//! Бришење студент од фајлот

const deleteStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    let studentData = JSON.parse(students);
    studentData = studentData.filter(
      (student) => student.name != 'Robert' && student.surname != 'Melnik'
    );
    const studentJSON = JSON.stringify(studentData);
    await modules.fileWrite('./students.json', studentJSON);
    console.log('Student deletion completed!');
  } catch (err) {
    console.log(err);
  }
};

deleteStudent();

//! Менување на името на студент во фајлот

const renameStudent = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    const renameStudents = studentData.map((student) => {
      if (student.name === 'Ringo') {
        return { ...student, name: 'Bingo' };
      }
      return student;
    });
    const studentJSON = JSON.stringify(renameStudents);
    await modules.fileWrite('./students.json', studentJSON);
    console.log('Student renamed!');
  } catch (err) {
    console.log(err);
  }
};

renameStudent();

//! Читање на сите студенти од фајлот

const readStudents = async () => {
  try {
    const students = await modules.fileRead('./students.json');
    const studentData = JSON.parse(students);
    console.log(`Students enrolled in our school are:`);
    console.log(studentData);
  } catch (err) {
    console.log(err);
  }
};

readStudents();
