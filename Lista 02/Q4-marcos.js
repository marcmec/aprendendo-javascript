//adição de dois números e consulta de valor

let somar =(a,b)=>{

    let soma=a+b
    if(soma>20){
        soma+=8
        console.log('maior que 20, recebe +8: '+soma)
    }else if(soma<=20){
        soma-=5

        console.log('menor que 20, recebe -5: '+ soma)
    }

}


somar(30,10)//informe os valores a serem somados