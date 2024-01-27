// EUR to MKD

const eur2mkd = (eur) => `${eur} EUR amounts to ${(eur * 61.5).toFixed(2)} MKD`;

// MKD to EUR

const mkd2eur = (mkd) => `${mkd} MKD amounts to ${(mkd / 61.5).toFixed(2)} EUR`;

// EUR to USD

const eur2usd = (eur) => `${eur} USD amounts to ${(eur / 1.1).toFixed(2)} EUR`;

// USD to EUR

const usd2eur = (usd) => `${usd} EUR amounts to ${(usd * 1.1).toFixed(2)} USD`;

// MKD to USD

const mkd2usd = (mkd) => `${mkd} MKD amounts to ${(mkd / 55.8).toFixed(2)} USD`;

// USD to MKD

const usd2mkd = (usd) => `${usd} USD amounts to ${(usd * 55.8).toFixed(2)} MKD`;

module.exports = {
  eur2mkd,
  mkd2eur,
  eur2usd,
  usd2eur,
  mkd2usd,
  usd2mkd,
};
