//ler 5 valores e distinguir quem é par quem é ímpar quem é positivo ou negativo



let valores= (a1,a2,a3,a4,a5) =>{
    let contopar=0
    let contimpar=0
    let contpositivo=0
    let contnegativo=0

    if(a1%2==0){
        contopar++
        if(a1<0){
            contnegativo++
        }else{
        contpositivo++
    } 
}
if(a1%2==1){
    contimpar++
    contpositivo++
   
}else  if(a1%2==-1){
    contimpar++
    contnegativo++
}//
   if(a2%2==0){
        contopar++
        if(a2<0){
            contnegativo++
        }else{
        contpositivo++
    } 
}
if(a3%2==1){
    contimpar++
    contpositivo++
   
}else  if(a3%2==-1){
    contimpar++
    contnegativo++
}//
if(a4%2==0){
    contopar++
    if(a4<0){
        contnegativo++
    }else{
    contpositivo++
} 
}
if(a4%2==1){
contimpar++
contpositivo++

}else  if(a4%2==-1){
contimpar++
contnegativo++
}//
if(a5%2==0){
    contopar++
    if(a5<0){
        contnegativo++
    }else{
    contpositivo++
} 
}
if(a5%2==1){
contimpar++
contpositivo++

}else  if(a5%2==-1){
contimpar++
contnegativo++
}//
console.log(contopar,contpositivo,contimpar,contnegativo)
}

valores(-3,2,5,4,8)//informe os 5 valores para serem avaliados aqui