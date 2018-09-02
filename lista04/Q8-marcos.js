//exibir números perfeitos


let num1=8128 // informar o valor do número para ser testado, para teste tente 6,28,496 e 8128
let contador=num1
let teste,num2,contador2=0

  for(a=0;a<num1;num1--){
      num2=num1-1
      teste=contador%num2
      if(teste==0){
        contador2+=num2
      console.log(num2,contador2)}
}
if(contador===contador2){
    console.log('Is perfect!!')
}else{
    console.log("Isn't perfect")
}
