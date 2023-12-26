// Converting US Cups to milliliters

const cup2ml = (cup) =>
  console.log(`There are ${cup * 236.6} milliliters in ${cup} cups`);

const ml2cup = (ml) =>
  console.log(`There are ${ml / 236.6} cups in ${ml} milliliters`);

module.exports = {
  cup2ml,
  ml2cup,
};
