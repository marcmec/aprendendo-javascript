//apesar de já ter respondido a mesma questão anteriormente na QUESTÃO 2, escrevo outro método

let a=5 //insira um número correspondente ao dia da semana lembrando que de 1 a 7 corresponde de domingo a sábado
    switch (a) {
        case 1:
        case 7:
        console.log('É um fim de semana!!!')
            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        console.log('É um dia da semana!!!')
        break;
        default:
        console.log('É um dia inválido!!!!')
            break;
    }