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

function doNothing(object) {
  return `PRODUTO: ${object.name} - ${object.description}`;
}

console.log(doNothing(product));
