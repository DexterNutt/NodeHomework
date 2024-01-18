const http = require('http');

const handler = (req, res) => {
  // console.log(req.url);
  // console.log(req.url.split('/'));
  const [_, op, name] = req.url.split('/');
  switch (op) {
    case 'length':
      let length = name.length;
      res.end(`${name} is ${length} characters long`);
      break;

    case 'even':
      let even = name.length % 2;
      if (even === 0) {
        res.end(`${name} is even`);
      } else res.end(`${name} is odd`);
      break;

    case 'vowels':
      const vowels = 'AaEeIiOoUu';
      let vowelCount = 0;
      for (let i = 0; i < name.length; i++) {
        if (vowels.indexOf(name[i]) !== -1) {
          vowelCount += 1;
        }
      }
      res.end(`There are ${vowelCount} vowels in ${name}`);
      break;

    case 'consonants':
      const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
      let consonantCount = 0;
      for (let i = 0; i < name.length; i++) {
        if (consonants.indexOf(name[i]) !== -1) {
          consonantCount += 1;
        }
      }
      res.end(`There are ${consonantCount} consonants in ${name}`);
      break;

    default:
      res.end('There is no such operation');
  }
};

const server = http.createServer(handler);

server.listen(10000, '127.0.0.1', (err) => {
  if (err) console.log('error');
  console.log('server started on port 10000');
});

//* 1
//* 2
//* 3
