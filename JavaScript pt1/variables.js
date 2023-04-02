// Variáveis

var number1 = 1   // Não usar o var.
let number2 = 2
const number3 = 3    // Uma vez que seu valor foi declarado, não pode ser alterado em uma outra atribuição futura.

number1 = 10
number2 = 20

console.log(number1)
console.log(number2)
console.log(number3)

// Permitido: 

// - Iniciar com $ (cifrão) ou _ (underline)
// - Colocar acentos
// - Iniciar com letras
// - Letras MAIÚSCULAS e minúsculas

// Não pode:

// - Iniciar com números
// - Colocar espaços

// Ideal:

// - camelCase (inicia com letra minúscula e as próximas palavras com maiúsculas)
// - snake case (entre cada palavra tem um _)
// - Iniciar sempre em Inglês
// - Nomes que fazem sentido