const express = require('express');
const app = express();
const converterModules = require('./converter_modules');
// console.log(converterModules);
app.use(express.urlencoded({ extended: true }));

//? Da se kreira get ruta koja kje presmetuva bmi

app.get('/bmiCalc/:weight/:height', (req, res) => {
  let bmi = Math.round(
    Number(req.params.weight) / (Number(req.params.height) / 100) ** 2
  );

  if (bmi <= 18.5) {
    res.send(
      `Your BMI is ${bmi}, you are UNDERWEIGHT, consider eating more or see a nutritionist.`
    );
  } else if (bmi <= 25.0) {
    res.send(
      `Your BMI is ${bmi}, you are NORMAL, keep doing what you're doing!`
    );
  } else if (bmi <= 30.0) {
    res.send(
      `Your BMI is ${bmi}, you are OVERWEIGHT, consider eating less or start exercising.`
    );
  } else if (bmi > 30) {
    res.send(
      `Your BMI is ${bmi}, you are OBESE, consider seeing a nutritionist for a weight-loss diet and start exercising!`
    );
  } else {
    res.send('Please enter your weight / height');
  }
});

//? da se kreira post ruta koja kje presmetuva bmi

app.post('/bmiCalc/', (req, res) => {
  let bmi = Math.round(
    Number(req.body.weight) / (Number(req.body.height) / 100) ** 2
  );

  if (bmi <= 18.5) {
    res.send(
      `Your BMI is ${bmi}, you are UNDERWEIGHT, consider eating more or see a nutritionist`
    );
  } else if (bmi <= 25.0) {
    res.send(
      `Your BMI is ${bmi}, you are NORMAL, keep doing what you're doing`
    );
  } else if (bmi <= 30.0) {
    res.send(
      `Your BMI is ${bmi}, you are OVERWEIGHT, consider eating less or start exercising`
    );
  } else if (bmi > 30) {
    res.send(
      `Your BMI is ${bmi}, you are OBESE, consider seeing a nutritionist for a weight-loss diet and start exercising`
    );
  } else {
    res.send('Please enter your weight / height');
  }
});

//? Da se kreira konverter na pari koj kje konvertira eurotodolar, dolartoeuro, mkdtoeuro,eurotomkd so get i post metoda

app.get('/calculator/:conversion/:value', (req, res) => {
  const conversion = req.params.conversion;
  const value = req.params.value;
  const result = converterModules[conversion](value);
  res.send(result);
});

app.post('/', (req, res) => {
  const conversion = req.body.conversion;
  const value = req.body.value;
  if (conversion === 'eur2mkd') {
    res.send(converterModules.eur2mkd(value));
  } else if (conversion === 'mkd2eur') {
    res.send(converterModules.mkd2eur(value));
  } else if (conversion === 'eur2usd') {
    res.send(converterModules.eur2usd(value));
  } else if (conversion === 'usd2eur') {
    res.send(converterModules.usd2eur(value));
  } else if (conversion === 'mkd2usd') {
    res.send(converterModules.mkd2usd(value));
  } else if (conversion === 'usd2mkd') {
    res.send(converterModules.usd2mkd(value));
  }
});

//? da se kreira ruta koja kje presmetuva dali nekoe ime e parno neprano, i kolku karakteri ima i kolku samoglaski so post metoda.

app.post('/name_property', (req, res) => {
  const name = req.body.name;
  const even = name.length % 2 === 0 ? `even` : `odd`;
  const length = name.length;
  const vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  let vowelCount = 0;
  for (let char of name) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  res.send(
    `The name is ${even}, ${length} characters long and contains ${vowelCount} vowels!`
  );
});

//? Da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodveten so mesecot so get i post metoda

app.post('/zodiac', (req, res) => {
  const day = req.body.day;
  const month = req.body.month;
  let sign;
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    sign = 'Aries';
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    sign = 'Taurus';
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    sign = 'Gemini';
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    sign = 'Cancer';
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    sign = 'Leo';
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    sign = 'Virgo';
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    sign = 'Libra';
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    sign = 'Scorpio';
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    sign = 'Sagittarius';
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    sign = 'Capricorn';
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    sign = 'Aquarius';
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    sign = 'Pisces';
  }
  res.send(`Your zodiac sign is ${sign}`);
});

//? Da se kreira ruta koja kje presmetuva nekoj tekst kolku zborovi ima so post metod

app.post('/text', (req, res) => {
  const textLength = req.body.length;
  const length = textLength.length;
  res.send(`The text is ${length} characters long`);
});

app.listen(10000, (err) => {
  if (err) console.log(err);
  console.log(`Server initiated on port 10000`);
});
