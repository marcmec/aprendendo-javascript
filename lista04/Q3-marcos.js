//a média dos números pares do intervalo de 1a 100 inclusive


let contador=0,contadorpares=0,soma=0,total=0,media=0

for (a=0;a<100;a++){

    contador++
    
    if(contador%2==0){
        contadorpares++
        soma=contador
        total+=soma
    }
    media=total/contadorpares
}

console.log(contador+'\n',soma,'',media,)