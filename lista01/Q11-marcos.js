//salario do vendedor
let salario= (pormes,comissao,porvenda,qtdcarros,valortotalcarros) =>(
    console.log(pormes+(comissao*qtdcarros)+porvenda*(valortotalcarros) )
)

salario(500,50,0.05,5,1000) //colocar  em ordem o salario fixo, a comissao por venda/unidade, % em cima da venda, quantidade vendida e total realizdo com as vendas