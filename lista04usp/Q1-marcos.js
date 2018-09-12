//do while sem usar o operador ||



let nota=parseFloat(window.prompt("Digite um valor"))
let a=false
if(nota>10){
    a=true

while(a){

    console.log("Voce entrou no loop do maior que 10: "+nota)
}
}else if(nota<0){
    a=true
while(a){

    console.log('você entrou no loop do menor que 0: '+nota)
}
}