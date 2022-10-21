/* CONTROLE DE FLUXO - CONDICIONAIS - SWITCH CASE 

*/

const temperature = 33;

switch (temperature) {
  case 30:
    console.log("A pessoa está com a temperatura MUITO abaixo do normal.");
    break;

  case 33:
    console.log("A pessoa está com a temperatura abaixo do normal.");
    break;

  case 36:
    console.log("A pessoa está com a temperatura normal.");
    break;

  default:
    console.log('Temperatura não encontrada.')
    break;
}
