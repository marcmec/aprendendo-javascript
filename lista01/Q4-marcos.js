//media ponderada


let ponderada=() => {
    let a= parseInt(window.prompt("Insira o valor de A: "))
    let b= parseInt(window.prompt("Insira o valor de B: "))
    let c= parseInt(window.prompt("Insira o valor de C: "))
    let d= parseInt(window.prompt("Insira o valor de D: "))
    console.log('a média ponderada dos valores são: ' + `${(a*a+b*b+c*c+d*d)/(a+b+c+d)}`)
}
ponderada()