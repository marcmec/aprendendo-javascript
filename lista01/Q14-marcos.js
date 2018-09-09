//salario mensal atual



let novosalario=() =>{
    let salario= parseFloat(window.prompt("Digite  o valor do salário atual!"))
    let reajust= parseFloat(window.prompt("Digite  o valor da percentagem que será aplicada ao salário exemplo 0.2 = 20%"))
    console.log('O salario antigo era: ' + salario + ' e o novo salario é: ' + salario + salario*reajust)
}

