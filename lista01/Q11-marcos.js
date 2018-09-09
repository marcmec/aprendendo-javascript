//salario do vendedor
let salario= () =>{
    let vendedor= window.prompt("Digite o nome do vendedor: ")
    let qtdcarros= parseInt(window.prompt("Digite o número de carros vendidos"))
    let valortotalcarros= parseFloat(window.prompt("Digite o total das vendas do vendedor: "))

    let pormes=500,comissao=50,porvenda=0.05
    

    console.log(pormes+(comissao*qtdcarros)+porvenda*(valortotalcarros) )
}

salario() //colocar  em ordem o salario fixo, a comissao por venda/unidade, % em cima da venda, quantidade vendida e total realizdo com as vendas