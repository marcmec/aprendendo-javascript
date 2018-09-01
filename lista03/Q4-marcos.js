//validando um cpf


const validacao=(pri,seg,ter,quar,quin,sex,set,oit,nono,dec,dec1) =>{
    let soma1=pri*10 +seg*9+ter*8+quar*7+quin*6+sex*5+set*4+oit*3+nono*2
    
    let sub1 = 11-(soma1%11)
    let soma2= 11*pri+10*seg+9*ter+8*quar+7*quin+6*sex+5*set+4*oit+3*nono+2*dec
    let sub2= 11-(soma2%11)
    let state=false
    if(sub1<10){
        if(sub1==0){
            state=true
        }
    }else{
        console.log('CPF INVÁLIDO!')

    }
    switch (state=true) {
        case sub2==0 || sub2==dec1:
            console.log('É um cpf válido mano!!')
        break;
        case sub2!=dec1:
        console.log('CPF inválido')
        break;
        default:
        console.log('nada')
            break;
}
    console.log(soma1,' ',soma2,'  ',sub1,'  ', sub2)
}

validacao(1,1,1,2,2,2,3,3,3,9,6)//insira os números do cpf do 1 ao 11 dígito