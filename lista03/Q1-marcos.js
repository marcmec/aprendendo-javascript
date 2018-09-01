//verificar se o número é divisível por 3

const div3= (nota) =>{
    switch (nota%3) {
        case 0:
            console.log('Esse número é divisível por 3!!')
            break;
    
        default:
        console.log("Esse número NÃO é divisível por 3!!!!")
            break;
    }
}

div3(6)//insira o número aqui