//eleições
let eleitores=50
let brancos= 10
let nulos= 5


function percentagem1(){

    return (brancos*100)/50
}

function percentagem2(){

    return (nulos*100)/50
}
console.log('% dos nulos é ' + percentagem2())
console.log('% dos brancos é ' + percentagem1())