function sum(number1, number2){ // VOID = vazio        ----->   A função só é vazia quando não possui o return.
    //return number1 + number2

    const result = number1 + number2

    return result
}

const firstNumber = 10
const seccondNumber = 20

console.log(`O primeiro número é ${firstNumber}.`)
console.log(`O segundo número é ${seccondNumber}.`)
console.log(`E a soma dos dois é ${sum(firstNumber, seccondNumber)}.`)

