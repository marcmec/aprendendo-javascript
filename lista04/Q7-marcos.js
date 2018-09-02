//ler 10 valores e mostrar se estão num intervalo entre 10 e 20

let contador1=0,contador2=0,intervalo,dentro=0,fora=0


for(a=0;a<10;a++){
    intervalo=Math.floor(Math.random()*20)
    if(intervalo>10 && intervalo<20){
        contador1=intervalo
        dentro++
    } else{
        contador2=intervalo
        fora++
    }
    console.log('dentro '+contador1,'fora '+contador2,' ',intervalo)
}

console.log('números dentro do intervalor '+dentro+'\n'+'intervalo fora '+fora)
