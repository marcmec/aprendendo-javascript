//Código para exibir resultados lógicos

let maiorque=() => {
    

    let a= parseInt(window.prompt("Insira o valor de A: "))

    console.log( a + ' ao quadrado é '+ Math.pow(a,2) + ' ao cubo é : ' + Math.pow(a,3) + ' raiz quadrada é : ' + Math.sqrt(a) + ' raiz cúbica é : ' + Math.cbrt(a))
    
    
}
maiorque()