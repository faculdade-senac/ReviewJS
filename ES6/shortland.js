const name = 'Bavaria';
const sellPrice = 4.00;
const buyPrice = 2.50;
const description = '600ml';

const product = {
  name,
  sellPrice,
  buyPrice,
  description,
};
// Queremos apenas o nome a descrição deste
function doNothing({ name, description }) {
  return `PRODUTO: ${name} - ${description}`;
}

console.log(doNothing(product));
