// EUR to MKD

const eur2mkd = (eur) => console.log(`${eur} EUR amounts to ${eur * 61.5} MKD`);

// MKD to EUR

const mkd2eur = (mkd) => console.log(`${mkd} MKD amounts to ${mkd / 61.5} EUR`);

// EUR to USD

const eur2usd = (eur) => console.log(`${eur} USD amounts to ${eur / 1.1} EUR`);

// USD to EUR

const usd2eur = (usd) => console.log(`${usd} EUR amounts to ${usd * 1.1} USD`);

// MKD to USD

const mkd2usd = (mkd) => console.log(`${mkd} MKD amounts to ${mkd / 55.8} USD`);

// USD to MKD

const usd2mkd = (usd) => console.log(`${usd} USD amounts to ${usd * 55.8} MKD`);

module.exports = {
  eur2mkd,
  mkd2eur,
  eur2usd,
  usd2eur,
  mkd2usd,
  usd2mkd,
};
