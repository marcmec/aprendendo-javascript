//função do maior e menor número


let maioremenor=(a,b) =>{

    if(a>b){
        console.log('A raiz quadra do maior é: ' + Math.sqrt(a,2))
        console.log('O quadrado do menor é: ' + Math.pow(b,2))
    }else if(a<b){
        console.log('A raiz quadra do maior é: ' + Math.sqrt(b,2))
        console.log('O quadrado do menor é: ' + Math.pow(a,2))
    }else{
        console.log('Os números são iguais ou não foi inserido números para validação'+'\n variável a: '+ a+'\n variável b: '+ b)
    }
}

maioremenor(36,'Marcos Vinicius hahah')//insira os valores para serem validados