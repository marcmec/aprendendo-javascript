//código para calcular uma conta de um restaurante

cardapio={
    'hamburguer':3.50,
    'cheeseburguer':2.50,
    'fritas': 2.50,
    'refrigerante': 1

}

let conta=(h,c,f,r) =>(

    console.log("total a pagar: R$" + (h*cardapio.hamburguer+c*cardapio.cheeseburguer+f*cardapio.fritas+r*cardapio.refrigerante))
)
conta(1,1,1,1)//informe em sequência do cardápio quanto que voce consumiu hamburguer,cheeseburguer,fritas e refrigerante