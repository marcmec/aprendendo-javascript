//valores para X que são primos e diferentes de 0

for(x=0;x<100;x++){// informe o valor de x máximo que queres fazer 
    if(x%2!=0 && x!=0 && x!=1){
       //console.log(x+'difere de 2') lembrando que o 2 é primo, esta linha é apenas para excluir os números divisíveis por ele
       if(x%3!=0){
           //console.log(x+'difere de 3') lembrando que o 3 é primo, esta linha é apenas para excluir os números divisíveis por ele
           if(x%5!=0){
              // console.log(x+'difere de 5') lembrando que o 5 é primo, esta linha é apenas para excluir os números divisíveis por ele
               if(x%7!=0){
                   // lembrando que o 7 é primo, esta linha é apenas para excluir os números divisíveis por ele
                    console.log(x+' É primo' )
               }
           }
       }
    } 
    
}
console.log('todos estes são primos também 2,3,5 e 7')

