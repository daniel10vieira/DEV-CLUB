/* 1 - [ X ] Escreva um programa onde, você chame uma função enviando um número, 
a função deve imprime na tela os número de 1 até o número que você enviou 


function print(){
  
    for(let i=1;i<55;i++) {
  console.log("Contando... ", i)
    } 
  }

  print()

*/

/* 2 -[ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) 
e escrever a tabuada de 1 a 10 do valor lido.

const table = (number) =>{
  if(number > 10 || number < 1){
    console.log("Aceitamos SOMENTE números entre 1 e 10.")
    return
  }

  for(let i = 1; i <= 10; i++){
    console.log(`${i} x ${number} = ${i * number}`)
  }

}

table(10)

*/

/* 3 - [ X ] Escreva um programa onde, você chame uma função, e ela diga a hora exata! 

console.log(new Date().toLocaleTimeString('pt-BR'))

*/

/* 4 - [ X ]Escreva um programa onde, você chame uma função, e ela diga que ano estamos! 

console.log(new Date().getFullYear())

*/

/* 5 - [ X ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior 

const numbers = (numberOne, numberTwo) => {
  if(numberOne > numberTwo) console.log('O primeiro é maior.')
  else console.log('O segundo é maior.')
}

numbers(12,5)

*/

/* 6 - [ X ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função! 

const people = [
  {
    numberOfChildren: 2,
    salary: 2000,
  },
  {
    numberOfChildren: 5,
    salary: 3000,
  },
  {
    numberOfChildren: 0,
    salary: 2500,
  },
  {
    numberOfChildren: 2,
    salary: 1000,
  },
  {
    numberOfChildren: 3,
    salary: 2300,
  },
  {
    numberOfChildren: 1,
    salary: 200,
  },
  {
    numberOfChildren: 0,
    salary: -2000,
  },
]

function findAverageAndHighestSalary(peopleInformation) {

  let averageSalary = 0
  let averageChildren = 0
  let highestSalary = 0

  for (let i = 0; i < peopleInformation.length; i++) {
    
    const salary = peopleInformation[i].salary
    const children = peopleInformation[i].numberOfChildren

    if(salary > highestSalary) highestSalary = salary

    if(salary < 0) {
      console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
      console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
      console.log(`Maior SalárioR$${highestSalary}`)
      break
    } else {
      averageSalary = averageSalary + salary;
      averageChildren += children
    }
  }
}

findAverageAndHighestSalary(people)*/ 


/* 7 - [ X ] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 
Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do investimento - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo. 

function calculate(valorInicial,valorAtual,tempo){

  const juros = (valorAtual - valorInicial) / (valorInicial * tempo)

  console.log((juros * 100).toFixed(2) + "%")
}

calculate(1000, 1200, 10)*/

/* 8 - [ ] Escreva um programa onde, você cria uma função geradora de desconto. A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:

Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto

Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto

Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%

Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto

Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%

Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto

Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto

Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%

Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto

Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:

Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.

Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/

function calculateDiscount(name, value, isFirstPurchase, isCashPayment){

  if(isFirstPurchase && isCashPayment){

    if(value > 1000){}
    else if(value < 500){}
    else{}
  }

  if(isFirstPurchase && !isCashPayment){
    
    if(value > 1000){}
    else if(value < 500){}
    else{}
  }
  if(!isFirstPurchase && isCashPayment){
    
    if(value > 1000){}
    else if(value < 500){}
    else{}
  }
  if(!isFirstPurchase && !isCashPayment){
    if(value > 1000){}
    else if(value < 500){
      Math.random() * (20 - 10) + 10;
    }
    else{}
  }


}

