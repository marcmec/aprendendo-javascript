//meses de alta ou baixa temporada


let updown=(mes) =>{
switch(mes){

    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
    case 'junho':
    case 'julho':
    console.log('MÊS DE ALTA TEMPORADA!!!!!!')
    break;
    case 'março':
    case 'abril':
    case 'maior':
    case 'agosto':
    case 'setembro':
    case 'outubro':
    case 'novembro':
    console.log('MÊS DE BAIXA!')
    break;
    default:
    console.log('VOCÊ NÃO DIGITOU UM MÊS VÁLIDO! POR FAVOR NÉ?!')
    break;
}

}

updown('setembro')//insira aqui o mês para saber se é alta ou baixa temporada