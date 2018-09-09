//código para calcular uma conta de um restaurante

cardapio={
    'hamburguer':3.50,
    'cheeseburguer':2.50,
    'fritas': 2.50,
    'refrigerante': 1

}

let conta=() =>{
    let h = parseInt(window.prompt("Quantos hambúrgueres vocês vai querer?"))
    let c= parseInt(window.prompt("Quantos Cheeseburgueres você vai querer?"))
    let f= parseInt(window.prompt("Quantas porções de fritas ?"))
    let r= parseInt(window.prompt("Quantos refrigerantes?"))

    console.log("total a pagar: R$" + (h*cardapio.hamburguer+c*cardapio.cheeseburguer+f*cardapio.fritas+r*cardapio.refrigerante))
}
conta()