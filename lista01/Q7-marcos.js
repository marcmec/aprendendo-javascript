/*

Código para converter segundos em hora exata
*/

let s =7322
h=Math.floor(s/3600)
resthour=s%3600
min=Math.floor(resthour/60)
seg=resthour%60

console.log(h+' horas, '+min +' min, ' + seg + ' s')
