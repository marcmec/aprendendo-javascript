//qual o valor do plano de saúde???



const planohealth= (idade) =>{
    let custofixo=100
    switch (idade>0) {
        case idade<10:
                custofixo+=80
                console.log('O conveniado é uma criança valor: ' + custofixo)
            break;
        case idade>=10 && idade<=30:
        custofixo+=50
        console.log('O conveniado tem idade entre 10 e 30 valor: '+ custofixo)
        break;
        case idade>=40 && idade<=60:
        custofixo+=95
        console.log('O conveniado tem idade entre 40 e 60 valor: '+ custofixo)
        break;
        case idade>60:
        custofixo+=130
        console.log('O conveniado tem maisde 60 anos valor : '+ custofixo)
        break;
        default:
            break;
    }
}

planohealth(61)//insira a idade do conveniado para saber o plano