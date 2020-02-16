const fs = require('fs');

/*
fs.writeFile('arquivo.txt', 'conteúdo do arquivo', (err) => {
  if (err) {
    console.error('Ocorreu algum erro na leitura/escrita do arquivo');
    throw err;
  } else {
    console.log('arquivo criado.');
  }
});
*/
/*
fs.readFile('arquivo.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString('utf8'));
});
*/
/*
fs.readdir('.', (err, data) => {
  if (err) {
    throw err;
  } else {
    data.forEach((element) => {
      console.log(element);
    });
  }
});
*/
const files = fs.readdirSync('.').filter((file) => file.endsWith('.js'));
console.log(files);
