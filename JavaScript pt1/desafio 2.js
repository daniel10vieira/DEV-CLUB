/*  Comparar se o número é maior, igual ou menor que 10

const number = 30

if(number > 10){
    console.log("Maior que 10.")
} else if(number < 10){
    console.log("Menor que 10.")
} else {
    console.log("Igual a 10.")
}
*/


/*  Programa se verifica se a pessoa é brasileira ou não

const person = {
    name: "João",
    nationality:"Brasileiro"
}

if(person.nationality === "Brasileiro"){
    console.log("Ele é brasileiro.")
} else{
    console.log("Ele é estrangeiro.")
}
*/





/* Número aleatório 

const randomNumber = Math.floor(Math.random() * (10-1) + 1)
const winningNumber = Math.floor(Math.random() * (10-1) + 1)

console.log(randomNumber, "randomNumber")
console.log(winningNumber, "winningNumber")

if(randomNumber === winningNumber){
    console.log("Você ganhou!")
} else {
    console.log("Você perdeu.")
}

*/


/* 
    Número maior e número menor

    const firstNumber = 44
    const seccondNumber = 20
    const thirdNumber = 30

    if( firstNumber > seccondNumber && firstNumber > thirdNumber) {
        console.log("O primeiro é maior.")
    } 

    if( firstNumber < seccondNumber && firstNumber < thirdNumber) {
        console.log("O primeiro é o menor.")
    } 


    ------------------------------------------------------------------------------

    if( firstNumber > seccondNumber && firstNumber > thirdNumber) {
        console.log("O primeiro é maior.")
    } else if (seccondNumber > thirdNumber){
        console.log("O segundo é o maior.")
    } else {
        console.log("O terceiro é o maior")
    }

    if( firstNumber < seccondNumber && firstNumber < thirdNumber) {
        console.log("O primeiro é menor.")
    } else if (seccondNumber < thirdNumber){
        console.log("O segundo é o menor.")
    } else {
        console.log("O terceiro é o menor")
    }
*/


/* 
Aprovado ou não 

const personOne = {nome: "Daniel", idade: 19, sexo: "Masculino", profissão: "Programador", nacionalidade: "Paraguaio" }


if(personOne.idade >= 18 && personOne.nacionalidade === "Brasileiro"){
    console.log("Você passou no processo.")
} else {
        console.log("Você não passou no processo.")
}
*/

/* 
Pontos e suas explicações

const score = 10

switch (score) {
    case 0:
        console.log("Foi muito ruim.")
        break;

    case 1:
        console.log("Foi bem ruim.")
        break;

    case 2:
        console.log("Foi ruim.")
        break;

    case 3:
        console.log("Ruim.")
        break;

    case 4:
        console.log("Quase mediano.")
        break;

    case 5:
        console.log("Mediano.")
        break;

    case 6:
        console.log("Acima da média.")
        break;

    case 7:
        console.log("Foi muito bom.")
        break;

    case 8:
        console.log("Foi ótimo.")
        break;

    case 9:
        console.log("Quase nota máxima, se esforce mais um pouco na próxima.")
        break;

    case 10:
        console.log("Parabéns! Você conseguiu nota máxima.")
        break;
}

*/

/* Verificar se o número é par ou impar


const number = 5

if(number % 2 === 0) console.log("O número é par.")
else console.log("O número é ímpar.")
*/


/* Verificar se os números são par ou impar e se são primos


const number = 27

if(number % 2 === 0){

    if(number % 5 === 0) console.log("O número é par e é divisível por 5.")
    else console.log("O número é par e não é divisível por 5.")
} else{

    for(let i = 2; i < number; i++)
    if(number % i === 0) {
        console.log("Ele é ímpar, mas não é primo.")
        break
    } else {
        if (i === number -1) console.log("Ele é um número primo.")
    }
}
*/

/* 
const numberOne = 33
const numberTwo = 27
const numberThree = 15
const numberFour = 9

if(numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0){
    console.log("Todos são pares.")
} else if(numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0){
    console.log("Todos são ímpares.")
} else {
    console.log("Tudo misturado, ímpares e pares.")
}
*/
