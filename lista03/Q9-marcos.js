//anuidade de uma associação com 5% de juros sobre juros


const anuidade= (mes) =>{
    let valor=100 //informe o valor da anuidade
    let juros=0.05
 
    let jurosemjuros2= (juros*valor)+valor
    let jurosemjuros3= (juros*jurosemjuros2)+jurosemjuros2
    let jurosemjuros4= (juros*jurosemjuros3)+jurosemjuros3
    let jurosemjuros5= (juros*jurosemjuros4)+jurosemjuros4
    let jurosemjuros6= (juros*jurosemjuros5)+jurosemjuros5
    let jurosemjuros7= (juros*jurosemjuros6)+jurosemjuros6
    let jurosemjuros8= (juros*jurosemjuros7)+jurosemjuros7
    let jurosemjuros9= (juros*jurosemjuros8)+jurosemjuros8
    let jurosemjuros10= (juros*jurosemjuros9)+jurosemjuros9
    let jurosemjuros11= (juros*jurosemjuros10)+jurosemjuros10
    let jurosemjuros12= (juros*jurosemjuros11)+jurosemjuros11
    switch (mes) {
        case 'janeiro':
            console.log(valor)
            break;
        case 'fevereiro':
            console.log(jurosemjuros2)
           break;
        case 'março':
        console.log(jurosemjuros3)
          break;
        case 'abril':
        console.log(jurosemjuros4)
          break;
        case 'maio':
        console.log(jurosemjuros5)
           break;
        case 'junho':
        console.log(jurosemjuros6)
          break;
        case 'julho':
        console.log(jurosemjuros7)
          break;
        case 'agosto':
        console.log(jurosemjuros8)
           break;
        case 'setembro':
        console.log(jurosemjuros9)
           break;
        case 'outrubro':
        console.log(jurosemjuros10)
        break;
           
        case 'novembro':
            console.log(jurosemjuros11)
            break;
        case 'dezembro':
        console.log(jurosemjuros12)
            break;
        default:
        console.log('mês invalido')
            break;
    }

}

anuidade('dezembro')//insira o mês correspondente a informação sobre a anuidade