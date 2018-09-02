//soma de todos os numeros primos de 0 a 1000
let x=0
let soma=0
let totalsoma=0

for(a=0;a<1000;a++){// informe o valor de x máximo que queres fazer
    x++
    if(x%2!=0 && x!=0 && x!=1){
        
       //console.log(x+'difere de 2') lembrando que o 2 é primo, esta linha é apenas para excluir os números divisíveis por ele
       if(x%3!=0){
           //console.log(x+'difere de 3') lembrando que o 3 é primo, esta linha é apenas para excluir os números divisíveis por ele
           if(x%5!=0){
              // console.log(x+'difere de 5') lembrando que o 5 é primo, esta linha é apenas para excluir os números divisíveis por ele
               if(x%7!=0){
                                      // lembrando que o 7 é primo, esta linha é apenas para excluir os números divisíveis por ele
                    //console.log((a=a+x)+17)
                    soma=x
                    console.log(x,'fon',totalsoma+=soma)
               }
           }
       }
    } 
    
}
console.log('Mais os 4 primeiros primos que foram para teste e verificação 2+3+5+7 :'+totalsoma)