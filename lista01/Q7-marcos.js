/*

Código para converter segundos em hora exata
*/

let s =parseInt(window.prompt("Digite os segundos: ex: 7322s"))
h=Math.floor(s/3600)
resthour=s%3600
min=Math.floor(resthour/60)
seg=resthour%60

console.log(h+' horas, '+min +' min, ' + seg + ' s')
