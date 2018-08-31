//mostrar se o número é divisivel por 3 e por 7 ao mesmo tempo


let multiplo= (a) =>{

    if(a%3===0){
        console.log('Este número é divisível por 3')
    if((a%3===0 && a%7===0)){
        console.log('Este número é divisível por 3 e por 7')
    }
}else if(a%7===0){
        console.log('Este número é divisível por 7')

    }else{
        console.log('Este número não é divísivel nem por 3 nem por 7')
    }
}

multiplo(18)//insira o valor da variável para testar