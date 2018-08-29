//salario mensal atual

let salario=900
let reajust= 0.10//10%

function novosalario(){

    return salario + salario*reajust
}

console.log('O salario antigo era: ' + salario + ' e o novo salario é: ' + novosalario())