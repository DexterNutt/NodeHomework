const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true })); //!

app.get('/calculator/:op/:a/:b', (req, res) => {
  switch (req.params.op) {
    case '+':
      return res.send(`${Number(req.params.a) + Number(req.params.b)}`);
    case '-':
      return res.send(`${Number(req.params.a) - Number(req.params.b)}`);
    case ':':
      return res.send(`${Number(req.params.a) / Number(req.params.b)}`);
    case '*':
      return res.send(`${Number(req.params.a) * Number(req.params.b)}`);
    default:
      return res.send('error');
  }
});

//

app.post('/calculator', (req, res) => {
  console.log(req.body);
  switch (req.body.op) {
    case '+':
      return res.send(`${Number(req.body.a) + Number(req.body.b)}`);
    case '-':
      return res.send(`${Number(req.body.a) - Number(req.body.b)}`);
    case ':':
      return res.send(`${Number(req.body.a) / Number(req.body.b)}`);
    case '*':
      return res.send(`${Number(req.body.a) * Number(req.body.b)}`);
    default:
      return res.send('error');
  }
});

app.listen(10000, (err) => {
  if (err) console.log(err);
  console.log(`Server initiated on port 10000`);
});
