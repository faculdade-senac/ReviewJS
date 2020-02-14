function funcao(param1, param2, ...others) {
  console.log(others);
}
//Exemplo de chamada para Rest parameter
funcao(1, 2, 3, 4, 5, 6);

const array1 = [1, 2, 3, 4];

// Exemplo de concatenação
const array2 = [...array1, 5, 6, 7];

//Exemplo de conversão em array de caracteres
const string = "Faculdade Senac";
const partes = [...string];

//Teste
function x (m, ...values) {
  return values.map((v) => m * v);
}

const result3 = array.map((value) =>
// outros códigos
  value * 2);