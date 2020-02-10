/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
const array = [1, 2, 3, 4, 5, 6, 7];

const objects = [
  { name: 'Angelo', birth: 1986 },
  { name: 'CV', birth: 1984 },
  { name: 'Edécio', birth: 1972 },
  { name: 'Gladimir', birth: 1887 },
];

objects.forEach((element) => {
  console.log(element);
});

for (const iterator of objects) {
  console.log(iterator);
}

for (const key in objects) {
  if (objects.hasOwnProperty(key)) {
    const element = objects[key];
    console.log(element);
  }
}

for (const [index, value] of objects.entries()) {
  console.log(index, value);
}
