// 1) Да се креира модул потпишан vaga.js којшто ќе има методи што конвертира грамови во килограми и обратно
const { gramToKilogram, kilogramToGram } = require("./vaga.js");

gramToKilogram(200);
kilogramToGram(200);

// 2) Да се креира модул потпишан valuta.js којшто ќе има методи што конвертираат евра во денари, евра во долари, денари во долари и обратно
const {
  eur2mkd,
  mkd2eur,
  eur2usd,
  usd2eur,
  mkd2usd,
  usd2mkd,
} = require("./valuta.js");

eur2mkd(100);
usd2mkd(100);

// 3) Да се креира модул по ваша желба (американска "мерна единица" чаша во милилитри)

const { cup2ml, ml2cup } = require("./cups.js");

cup2ml(2);
