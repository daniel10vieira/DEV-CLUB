/* 
    Reduce
        -Retorna um valor (pode ser um novo array, um objeto, string, number, etc.)
        -Aceita 4 parâmetros
            -acumulador
            -valor atual
            -index
            -array completo
*/

/* const list = [1,2,3,4];

const sum = list.reduce( (acc, current) => {
    return acc + current
}, 0)

console.log(sum) */

const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerbeg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976},
]

const allMarketValues = companies.reduce( ((acc, current) => current.marketValue + acc), 0)

console.log(allMarketValues)