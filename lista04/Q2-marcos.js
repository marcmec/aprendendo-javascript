//algoritimo para somar os pares do interval de 0 a 100



let a,soma,somador,total
total=0
somador=0
soma=0
for (a =0;a<100; a++){
   
    soma++
    if(soma%2==0){
        somador=soma
        total+=somador
}

    console.log(soma,' somar pares',total)
    
}

