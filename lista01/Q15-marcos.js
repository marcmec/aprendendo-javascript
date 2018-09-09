
//custo de um carro
let fabrica=parseFloat(window.prompt("Diga o valor do custo de fabrica!"))
let percentualfab=parseFloat(window.prompt("Diga o valor em % aplicado ao valor da fabrica!"))
let impostos=parseFloat(window.prompt("Diga o valor do imposto em %:"))
let distribuidor=fabrica+(percentualfab*fabrica)
let precoparaConsumidor= distribuidor +(distribuidor*impostos)



console.log(precoparaConsumidor)
