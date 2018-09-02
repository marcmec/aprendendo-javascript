//mostrar dois valores e calcular a soma dos números ímpares no intervalo entre eles


let num1=5,num2=10,somador=num2,impares=0,totalimpar=0 //informe um número na variável num1 e outro número maior, na variável num2 para calcular o invervalo entre eles


for(a=num1;a<num2;a++){
    somador++

    if(somador%2==1){
     impares+=somador

    }
}
console.log(impares)

  
