//eleições
let eleitores=parseInt(window.prompt("Digite a quantidade de eleitores"))
let brancos= parseInt(window.prompt("Digite quantos votos foram brancos"))
let nulos= parseInt(window.prompt("Digite quantos votos foram nulos"))
let validos= parseInt(window.prompt("Digite quantos votos foram validos"))



console.log('% dos válidos é :' +(validos*100)/eleitores)
console.log('% dos brancos é :' +(brancos*100)/eleitores)
console.log('% dos nulosé :'+ (nulos*100)/eleitores)

