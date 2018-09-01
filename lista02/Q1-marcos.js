//informar se os lados exibidos formam um triangulo

function istriangulo(a,b,c){

    if((a>(b+c))||(b>(a+c))||(c>(a+b))){

    console.log(' não é um triangulo!!!')
    }
    else  {

        console.log('é um triangulo!!')
}

    return a,b,c
}

istriangulo(8,3,4)//informar em sequencia os lados, a,b,c

