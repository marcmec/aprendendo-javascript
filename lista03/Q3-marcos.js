//contador de cedulas
const contador= (dinheiro) =>{
    let ced100=0,ced50=0,ced10=0,ced5=0,ced1=0

while (dinheiro>0) {
    

    switch (dinheiro>0) {
        case dinheiro>=100:
            ced100++
            dinheiro-=100
            break;
        case dinheiro>=50:
            ced50++
            dinheiro-=50
            break;
        case dinheiro>=10:
        ced10++
        dinheiro-=10
        break;
        case dinheiro>=5:
        ced5++
        dinheiro-=5
        break;
        default:
        ced1++
        dinheiro-=1
        break;
       
    }
}
    console.log('notas necessarias para o troco \n' + ced100+ ' de 100 \n'+ced50+' notas de 50 \n'+ced10+' notas de 10 \n'+ ced5+ ' notas de 5 \n'+ ced1+' notas de 1')
}

contador(19)
