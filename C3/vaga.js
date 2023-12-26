// kg > g

const gramToKilogram = (g) =>
  console.log(`There are ${g / 1000} kilograms in ${g} grams`);

// g > kg

const kilogramToGram = (kg) =>
  console.log(`There are ${kg * 1000} grams in ${kg} kilograms`);

module.exports = {
  gramToKilogram,
  kilogramToGram,
};
