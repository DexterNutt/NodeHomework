const http = require("http");

const handler = (req, res) => {
  console.log(req.url);
  console.log(req.url.split("/"));
  const [_, op, name] = req.url.split("/");
  switch (op) {
    case "length":
      let o;
      o = name.length;
      res.end(`${name} is ${o} characters long`);
      break;
    case "vowels":
      const vowels = "AaEeIiOoUu";
      let vowelCount = 0;
      for (let i = 0; i < name.length; i++) {
        if (vowels.indexOf(name[i]) !== -1) {
          vowelCount += 1;
        }
      }
      res.end(`There are ${vowelCount} vowels in ${name}`);
      break;
    case "consonants":
      const consonants = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz";
      let consonantCount = 0;
      for (let i = 0; i < name.length; i++) {
        if (consonants.indexOf(name[i]) !== -1) {
          consonantCount += 1;
        }
      }
      res.end(`There are ${consonantCount} consonants in ${name}`);
      break;
    default:
      res.end("There is no such operation");
  }
};

const server = http.createServer(handler);

server.listen(10000, "127.0.0.1", (err) => {
  if (err) console.log("error");
  console.log("server started on port 10000");
});
