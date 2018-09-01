//verificar se o aluno foi aprovado


let aprendendo=(a,b,c) =>{

    const resultado= (a+b+c)/3
    const recuperacao= 12/(2*resultado)+6

    if(resultado >=6){
        console.log('Você passou de semestre! com \n' + resultado + ' Na média')

    } else if(resultado<6){
        console.log('Sua nota: '+resultado+'\n você precisa tirar' + recuperacao+ '\n para passar de semestre')
    
        

    }

}

aprendendo(6,5.5,6)//insira as três notas para validação