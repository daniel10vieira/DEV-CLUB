/* CONTROLE DE FLUXO - CONDICIONAIS - IF ELSE 

if = SE
else = se não
else if = mas se...
*/

const temperature = 32

if(temperature >= 36 && temperature <= 39){
    console.log('A pessoa está saudável.')
} else if(temperature > 39){
    console.log('A pessoa está com febre.')
} else {
    console.log('A pessoa está com a temperatura muito baixa, procure um médico.')
}