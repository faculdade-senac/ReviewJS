const date = new Date();
// Datas
console.log(Intl.DateTimeFormat('pt-BR').format(date));
console.log(Intl.DateTimeFormat('en-US').format(date));
console.log(Intl.DateTimeFormat('pt-BR', { month: 'long', day: 'numeric', year: 'numeric' }).format(date));
// Números
// Número formatado para BR
console.log('Saída 1: ', Intl.NumberFormat('pt-BR').format(22.33));
// Número formatado para BR organização
console.log('Saída 2: ', Intl.NumberFormat('pt-BR').format(999999.33));
// Especificação do número mínimo de casas após a vírgula
console.log('Saída 3: ', Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(999999.3));
// Formatação para moeda
console.log('Saída 4: ', Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: 'BRL', style: 'currency' }).format(999999.3));
